const express = require("express");
//const app = express();
//const mongoose = require("mongoose");
const UserData = require("../models/userModel")
const router = express.Router();
 
 
 
 //create
  router.post("/", async (req, res) => {
    console.log(req.body);
    const { name, email, age } = req.body;
    try {
      const userAdded = await UserData.create({
        name: name,
        email: email,
        age: age,
      });
      res.status(201).json(userAdded);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  });

//get
router.get("/", async (req, res) => {
  
  
  try {
    const showAll =await UserData.find();
    res.status(200).json(showAll);
  }catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});


//get singleuser
router.get("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const singleuser =await UserData.findById({_id : id});
      res.status(200).json(singleuser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });



  //delete
  router.delete("/:id", async (req, res) => {
    const { id } = req.params;
  
    try {
      const singleuser =await UserData.findByIdAndDelete({_id : id});
      res.status(200).json(singleuser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });



  //put patch
  router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const {name , email , age} = req.body;
    try {
      const updateuser =await UserData.findByIdAndUpdate(id , req.body , {new:true});
      res.status(200).json(updateuser);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  });






module.exports=router;