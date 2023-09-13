const express = require("express");
const router = express.Router();
const  {register,login,update,deleteUser}  = require("./Auth");
const { adminAuth } = require("../middleware/auth");

//so here we have accesed them with same require

router.post("/register",register);

router.post("/login",login);

router.put("/update",adminAuth,update);

router.delete("/deleteUser",adminAuth,deleteUser);

module.exports = router;

