const express = require('express');
const sequelize = require('./config/config')
const Participantes = require('./models/Participantes')
const Evento = require('./models/Evento');
const router = require('./router/router');


const app = express();
app.use(express.json());
app.use('/api/', router)


app.get('/healtecheck', (req, res)=>{
    return res.status(200).json({
        msg:"estamos vivos",
        alive: true
    });
});

sequelize.authenticate()
.then(async () =>{
    console.log("conexao estabelecida com sucesso!")
    await sequelize.sync();
})

.then(()=>{
    app.listen(8080, [
        console.log("Estamos online em http://localhost:8080")
    ]);
})


.catch((error)=>{
    console.error("Erro ao se conectar com o banco de dados")
})


