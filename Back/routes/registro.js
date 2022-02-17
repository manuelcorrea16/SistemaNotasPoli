const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb+srv://db-user:db-password@cluster0.bjtml.mongodb.net/regEstudiantes?retryWrites=true&w=majority', ['registro'])

router.get('/registro', (req, res, next) => {
    db.registro.find((err, registro) => {
        if (err) return next(err);
        res.json(registro)
    });
})

router.post('/registro', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 

    const registros = req.body;
    //validaciones 34:44 
    db.registro.save(registros, (err, registros) => {
        if (err) return next(err);
        res.json(registros)
    });
})

module.exports = router