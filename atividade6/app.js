const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/views/index.html'));
});

app.post('/dados', (req, res) => {
    let agendamento = {
        nome: req.body.nome,
        endereco: req.body.endereco,
        telefone: req.body.telefone,
        data_agendamento: req.body.data_agendamento
    };

    let erro_form = false;

    if(agendamento.nome == ""){
        erro_form = true;
    }
    if(agendamento.endereco == ""){
        erro_form = true;
    }
    if(agendamento.telefone == ""){
        erro_form = true;
    }
    if(agendamento.data_agendamento == ""){
        erro_form = true;
    }

    res.render("dados.html", {agendamento, erro_form});

});

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
