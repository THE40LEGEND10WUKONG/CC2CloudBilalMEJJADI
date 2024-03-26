const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const port = process.env.PORT || 3002;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const app = express();
const ChamberModel = require('./Model/ChamberModel');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Recette')
.then(()=>{
    console.log("data base is connected");
}).catch((err)=>{
    console.log('error')
});

app.post('/add', (req, res)=>{

    ChamberModel.create({
        prix: req.body.prix
        disponibilite: req.body.disponibilite
    })
    .then(chambre=>res.json(chambre))
    .catch(e=>res.status(400).json({"message": e}));
});

app.get('/', (req, res)=>{
    ChamberModel.findOne({id:req.body.id})
    .then(chambre=>res.json(chambre))
    .catch(e=>res.status(400).json({"message": e}));
});
