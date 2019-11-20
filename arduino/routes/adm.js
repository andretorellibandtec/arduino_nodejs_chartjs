const express = require("express");
const router = express.Router();
const dados_arduino = require("../models/dados_arduino");

router.post("/dados", (req, res) => {
    dados_arduino().then((result) => {
        tem_hum = result.split(";")[0] + " " + result.split(";")[1];
        res.send(tem_hum);
    });
});

module.exports = router;