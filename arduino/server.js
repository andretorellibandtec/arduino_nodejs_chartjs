const express = require("express");
const body_parser = require("body-parser");
const handlebars = require("express-handlebars");
const adm = require("./routes/adm");
const path = require("path");
const app = express();
const port = 8080;

// engine;

app.engine('handlebars', handlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// middlewares
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

// arquivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

app.use(adm);

// rotas
app.get("/", (req, res) => {
    res.render("../views/index");
});

// servidor
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
});