const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  createdAt: {
    type:Date,
    required:true,
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;

module.exports.findUserInMongo = async (username) => {
    const body = {
        "username" : username
    }
   
    try {
        const user = await User.find(body);
        console.log("users found..--> ", user);
        return user;
      } catch (error) {
        console.log(error);
      }
}

module.exports.saveUserInMongo = async (username, password) => {
    const body = {
        "username" : username,
        "password" : password,
        "createdAt":new Date().toLocaleString()
    }
    const user = new User(body);
    try {
        await user.save();
      } catch (error) {
        console.log(error);
      }
}