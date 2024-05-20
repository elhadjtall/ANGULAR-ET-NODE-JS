const express = require("express");
const routes = express.Router();
const mongoose = require("mongoose");
require("dotenv").config();



let app = express();
let port = 3000;

app.use('/api', routes);

mongoose.connect(process.env.MONGO_URI, {})
    .then(() => {
        console.log('Connecter à la base de données mongoDB');
        app.listen(port, () => {
            console.log('Serveur démarré sur le port ' + port + ` avec Erreur de connexionerr`);
        });
    })
    .catch((err) => {
        console.log(err);
    })