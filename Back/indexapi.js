const express=require('express');
//const { path } = require('./app');
const cors = require('cors')
const app=express();
const registro=require('./routes/registro')
const evaluar=require('./routes/evaluar')
const nota=require('./routes/notas')
const path=require('path')

app.use(cors())

app.set('port', 3000)

app.use(express.json());

app.use('/api',registro)
app.use('/api',evaluar)
app.use('/api',nota)

app.use(express.static(path.join(__dirname,'../dist')))

app.listen(3000,()=>{
    console.log("validad")
})