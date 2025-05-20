const { ifError } = require("assert");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const shortid = require("shortid");
const Admin = require("../models/admin");

const generateJwtToken = (_id, role) => {
  return jwt.sign({ _id, role }, process.env.JWT_SECRET, {
    expiresIn: "10d",
  });
};

exports.signupAdmin = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      phoneNo,
      email,
      profilePicture,
      password,
    } = req.body;
    const hash_password = await bcrypt.hash(password, 10);
    const checkUser = await Admin.findOne({ email: email });
    if (checkUser) {
      return res.status(400).json({ message: " Admin already exist" });
    }

    const newUser = new Admin({
      firstName,
      lastName,
      phoneNo,
      email,
      profilePicture,
      hash_password,
      adminId: "AD-" + shortid()
    });

    const savedUser = await newUser.save();
    console.log(savedUser)
    const token = generateJwtToken(savedUser._id, savedUser.role);
    return res.status(201).json({
      token,
      admin: savedUser
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json(error);
  }
};

exports.signinAdmin = async(req, res) =>{
    try {
        const {email,password} = req.body
        console.log(email,password);
        const user = await Admin.findOne({email:email});
        console.log(user)
        if (user){
            
            const isPassword = await user.authenticate(password);
            console.log(isPassword);
            if(isPassword && user.role==="admin"){
                const token = generateJwtToken(user._id, user.role)
                return res.status(200).json({
                    token,
                    admin:user
                })
                


            }
            else{
                return res.status(400).json({message:"Wrong Password"});
            }
        }
        else{
            return res.status(400).json({message:"something went wrong"})
        }

    } catch (error) {
        return res.status(400).json(error);
        
    }
}