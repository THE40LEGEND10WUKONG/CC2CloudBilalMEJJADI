const mongoose = require('mongoose');
const chambreSchema = new mongoose.Schema({
    type: {
        type: String,
    },capacity: {
        type: Integer,
    },
    prix:{
      type : Integer,
      required: true
    },
    disponibilite: {
        type: Boolean,
    },
    hotel: {
        type: String,
    }
});

const chamberModel = mongoose.model('Chambre', chambreSchema);

module.exports = chamberModel;

