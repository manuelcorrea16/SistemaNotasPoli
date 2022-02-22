module.exports = app => {
    const PostGressControllers = require("../controllers/PostGressControllers.js")
  
    var router = require("express").Router();

    router.get("/sedes", PostGressControllers.findAllSedes);
    
    router.get("/programas", PostGressControllers.findAllProgramas);
    
    router.get("/asignaturas", PostGressControllers.findAllAsignaturas);

    router.get("/grupos", PostGressControllers.findAllGrupos);

    router.get("/profesores", PostGressControllers.findAllProfesores);

    app.use('/api/',router);

}