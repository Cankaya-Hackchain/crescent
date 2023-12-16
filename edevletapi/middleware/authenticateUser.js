const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const authenticateUser = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, "edevlet");

    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.user = user;
    console.log("dsa",req.user)
    next();
  } catch (error) {
    res.status(401).send({ error: "Kimlik doğrulama gereklidir." });
  }
};
const Role = (...allowedRoles) => {
  return async (req, res, next) => {
    // req.user üzerinden kullanıcının rollerini kontrol edin
    const user = req.user;
    console.log("sda",user)
    if (user && allowedRoles.includes(user.role)) {
      // Kullanıcı istenilen rollerden birine sahipse, işlemi devam ettirin
      next();
    } else {
      // Kullanıcı izni yoksa 403 (Forbidden) hatası döndürün
      res.status(403).send({ error: "Yetkisiz erişim" });
    }
  };
};

module.exports = {
  authenticateUser,
  Role,
};
