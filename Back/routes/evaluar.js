const router = require('express').Router();
const mongojs = require('mongojs');
const db = mongojs('mongodb+srv://db-user:db-password@cluster0.bjtml.mongodb.net/regEstudiantes?retryWrites=true&w=majority', ['evaluar'])

router.get('/evaluar', (req, res, next) => {
    db.evaluar.find((err, evaluar) => {
        if (err) return next(err);
        res.json(evaluar)
    });
})

router.post('/evaluar', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); 
    const formaEvaluar = req.body;
    //validaciones 34:44 
    db.evaluar.save(formaEvaluar, (err, formaEvaluar) => {
        if (err) return next(err);
        res.json(formaEvaluar)
    });
})

module.exports = router