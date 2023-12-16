const { Schema, model } = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    idNumber: {
      type: Number,
      required: true,
      unique: true,
      validate(value) {
        if (value.toString().length !== 11) {
          throw new Error("ID number must be 11 characters");
        }
      },
    },
    password: {
      type: String,
      required: true,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error('Password cannot contain "password"');
        } else if (value.length < 6) {
          throw new Error("Password must be at least 6 characters");
        } else if (value.includes(" ")) {
          throw new Error("Password cannot contain spaces");
        }
      },
    },
    bloodType: {
      type: String,
      required: true,
    },
    healthStatus: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    }, 
    // photo: {
    //   type: String,
    // },
    gender: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    driveLicense: {
      type: String,
      required: true,
    },
    criminalRecord: {
      type: String,
      required: true,
    },
    mentalState: {
      type: String,
      required: true,
    },
    relatives:
    {
      type: String,
      required: true,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.tokens;
  delete user.password;
  return user;
};

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user._id.toString() }, "edevlet");
  user.tokens = user.tokens.concat({ token });
  user.role = "user";
  await user.save();
  return token;
};

UserSchema.statics.findByCredentials = async (idNumber, password) => {
  try {
    const user = await User.findOne({ idNumber });
  
    console.log("gelen user",user)
    if (!user) {
      throw new Error("User not found");
    }
    console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("wqw",isMatch)
    if (!isMatch) {
      throw new Error("Incorrect password");
    }
    return user;
  } catch (e) {
    return "Unable to login!";
  }
};
UserSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
