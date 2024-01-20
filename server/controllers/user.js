const User=require('../models/user.js');
const catchAsync = require('../utils/catchAsync.js');
const sendjwtToken = require('../utils/sendjwtToken');
const bcrypt = require('bcrypt');



module.exports.register = async (req, res) => {
       const { username,name, email, password } = req.body;

    const foundUser = await User.findOne({ email: email });

    if (foundUser) {
        return res.status(200).json({
            success: true,
            error: "Email already in use"
        })
    }

    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        name,
        email,
        password: hash
    });
    await user.save();

    sendjwtToken(user,201,res);
  
   
   
  };
  
 
  module.exports.login =async (req, res, next) => {
    const { email, password } = req.body;

    const user = await User.findAndValidate(email, password);

    if (!user) {
        return next(new ErrorHand("Invalid email or password",404));
    }

    sendjwtToken(user,200,res);
}

module.exports.logout=async(req,res,next)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true,
    });
    res.status(200).json({
        status:true,
        message:"Logged Out",
    });
}


  module.exports.changePassword = async (req, res) => {
    const { oldpw,newpw } = req.body;
    //current logged in userdetails
    console.log(req.user);
    
 
    const result = await bcrypt.compare(oldpw , req.user.password);
    if(!result){
        res.status(400).send("old passwords does not match!!"); 
    }else{
        const hash = await bcrypt.hash(newpw, 12);
        await User.findOneAndUpdate({username:req.user.username},{password:hash});
    }
    
  };
//   module.exports.forgotPassword =catchAsync( async (req, res) => {
//     const { oldpw,newpw } = req.body;
//     //current logged in userdetails
//     const user = await User.findOne({  username });
//     const result = await bcrypt.compare(oldpw , user.password);
//     if(!result){
//         //oldpw  doesn't match 
//     }else{
//         const hash = await bcrypt.hash(newpw, 12);
//         await User.findOneAndUpdate({password:hash});
//     }
    
//   });