const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb+srv://db-user:db-password@cluster0.bjtml.mongodb.net/regEstudiantes?retryWrites=true&w=majority', ['nota'])

router.get('/nota', (req, res, next) => {
    db.nota.find((err, nota) => {
        if (err) return next(err);
        res.json(nota)
    });
})

router.post('/nota', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 

    const notas = req.body;
    //validaciones 34:44 
    db.nota.save(notas, (err, notas) => {
        if (err) return next(err);
        res.json(notas)
    });
})

module.exports = router