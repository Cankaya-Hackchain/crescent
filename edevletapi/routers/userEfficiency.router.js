const express = require("express");
const Address = require("../Models/UserEfficiency");
const UserEfficiency = require("../Models/UserEfficiency");
const authenticateUser = require("../middleware/authenticateUser");
const router = express.Router();
//ok
router.get('/user-efficiency', async(req,res) =>{
    try{
        const userEfficiencies = await UserEfficiency.find({});
        if(!userEfficiencies){
            throw new Error("No userEfficiencies found");
        }
        res.status(201).json(userEfficiencies);
    }catch (error){
        res.status(500).json({error: error.message})
    }
});
//ok
router.get('/user-efficiency/:id', async(req,res) =>{
    try{
        const userEfficiency = await UserEfficiency.findById(req.params.id);
        if(!userEfficiency){
            throw new Error("No userEfficiency found");
        }
        res.status(201).json(userEfficiency);
    }catch (error){
        res.status(500).json({error: error.message})
    }
});
//ok 
router.post('/user-efficiency', authenticateUser.authenticateUser,async(req,res) =>{

    const userEfficiency = new UserEfficiency(req.body);
    const user = req.user;

    try{
        if (!userEfficiency) {
            throw new Error("No userEfficiency found");
          }
          userEfficiency.user_id = user._id;
        await userEfficiency.save();
        res.status(201).json(userEfficiency);
    }catch (error){
        res.status(400).json({error: error.message})
    }
});

router.patch('/user-efficiency/:id', authenticateUser.authenticateUser,async(req,res) =>{
    const user = req.user;
    const userEfficiency = await UserEfficiency.findById(user._id);
    if (userEfficiency.user_id.toString() === req.params.id.toString()) {
    try{
        const userEfficiency = await UserEfficiency.findByIdAndUpdate(req.params.id,req.body,{
            new: true
        });
        res.status(201).json(userEfficiency);
    }catch(error){
        res.status(400).json({error: error.message});
    }
} else {
    res.status(401).send("You are not authorized to update this address");
  }
});

router.delete('/user-efficiency/:id', authenticateUser.authenticateUser, async (req,res) => {
    const user = req.user;
    const userEfficiency = await UserEfficiency.findById(user._id);
    if (userEfficiency.user_id.toString() === req.params.id.toString()) {
    try {
        await UserEfficiency.findByIdAndDelete(req.params.id);
        res.json({ message: 'UserEfficiency başarıyla silindi' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
} else {
    res.status(401).send("You are not authorized to update this address");
  }
});

module.exports = router;