const usermodel = require('../model/UserOtp-model');
const otpGenerator = require('otp-generator');



const handleuserlogin = async (req, res,next) => {
       const { phonenumber,passwords } = req.body;
       const otp = otpGenerator.generate(4, { upperCase: false, specialChars: false, alphabets: false });
       
       const user = await usermodel.findOne({ phonenumber, password: passwords });

       if(user) {
        await usermodel.create({
            phonenumber: phonenumber,
            password : passwords,
            otp: otp,
           })
       }
       else{
        console.log("please make id frist");
       }
       return res.json({otp: otp});
}






module.exports = {
    handleuserlogin
}