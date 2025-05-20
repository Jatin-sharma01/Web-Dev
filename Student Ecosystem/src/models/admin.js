const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const adminSchema = new mongoose.Schema({
    firstName : {
        type:String
    },
    lastName : {
        type:String
    },
    email : {
        type:String
    },
    hash_password: {
        type:String,
        required:true
    },
    role: {
        type:String,
        required:true,
        default: 'admin'
    },
    phoneNo: {
        type:String
    },
    profilePicture: {
        type:String
    },
    adminId: {
        type:String,
        require:true
    }
},{timestamps:true}
);

adminSchema.methods = {
    authenticate: async function(password){
        return await bcrypt.compare(password, this.hash_password)
    },

};

module.exports = mongoose.model("Admin", adminSchema)