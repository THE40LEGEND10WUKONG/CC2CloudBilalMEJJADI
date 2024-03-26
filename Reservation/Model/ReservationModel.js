const mongoose = require('mongoose');
const ReservationSchema = new mongoose.Schema({
    utilisateur_id: {
        type: Integer,
        required: true
    },
    chambre_id:{
      type :String  ,
      required: true
    }
});

const ReservationModel = mongoose.model('Utilisateur', ReservationSchema);

module.exports = ReservationModel;
