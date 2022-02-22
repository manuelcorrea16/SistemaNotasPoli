module.exports = app => {
    const PostGressControllers = require("../controllers/PostGressControllers.js")

    var router = require("express").Router();

    router.get("/sedes", PostGressControllers.findAllSedes);
    
    router.get("/programas", PostGressControllers.findAllProgramas);
    
    router.get("/asignaturas", PostGressControllers.findAllAsignaturas);

    app.use('/api/',router);
}