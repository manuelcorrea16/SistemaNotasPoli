module.exports = app => {
    const sedes = require("../controllers/sedesControllers.js")

    var router = require("express").Router();

    router.get("/sedes", sedes.findAll);

    app.use('/api/',router);
}