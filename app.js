const express = require ('express');


const app = express();

app.use(express.json()); // middleware para parsear el body de las peticiones en formato
 
app.use('/api/v1', require ('./Router/Routers'));


app.listen(3000, () => {
    console.log("Servidor Activo");

});

