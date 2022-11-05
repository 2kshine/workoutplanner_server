const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.signUp = async (req, res) => {
  const { firstName, middleName, lastName, email, password } = req.body;

  try {
    const hashPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      firstName,
      middleName,
      lastName,
      email,
      password: hashPassword,
    });
    req.session.user = newUser;
    res.status(201).json({
      status: "success",
      data: {
        user: newUser,
      },
    });
  } catch (e) {
    res.status(400).json({
      status: "failed",
    });
  }
};

exports.login = async (req, res) => {
    const {email, password } = req.body;
    try {
        const userRecord = await User.findOne({email})

        if(!userRecord){
            return res.status(404).json({
                status:"failed",
                message: "No email address found. Please check your email id or sign up."
            })
        }

        const isTrue = await bcrypt.compare(password, userRecord.password)
        if(isTrue){
            req.session.user = userRecord
            res.status(200).json({
                status:"success"
            })
        }else{
            return res.status(400).json({
                status:"failed",
                message: "Please enter the correct password or email"
            })
        }
    }catch(e){
        res.status(400).json({
            status:"failed"
        })
        console.log(e);
    }
}
    