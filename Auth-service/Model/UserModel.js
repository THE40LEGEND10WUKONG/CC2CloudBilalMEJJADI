const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
      type :String  ,
      required: true
    },
    
    login: {
        type: String,
        required: true
    }
});

const userModel = mongoose.model('Utilisateur', userSchema);

module.exports = userModel;
