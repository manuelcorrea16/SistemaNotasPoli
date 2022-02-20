const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require ("cors");

const app = express();

var corsOptions ={
    origin : "http://localhost:8080"
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended:true}));

app.get ("/", (req, res)=> {
    res.json({messege : "Bienvenido a Server Postgres"})
});
    
require("./routes/sedesRouters")(app);

const PORT = process.env.PORT  || 8080 ;

app.listen(PORT, () => {
    console.log(`Server Postgres en el puerto ${PORT}`);
})