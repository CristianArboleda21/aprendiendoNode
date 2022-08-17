const express = require('express');
const app = express();
const path = require('path');
//app.listen(3090);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('src/views/static'));



app.listen(p = process.env.PORT || 3090, ()=>{
    console.log(`Ejecutando node ${p}`);
});

/*app.get("/", (req, res)=>{
    res.send("Hola mundo")
})*/

app.get("/", (req, res)=>{
    res.render('pages/index');
})

app.get("/about", (req, res)=>{
    res.render('pages/about');
});


//registrar
app.get("/registrar", (req, res)=>{
    res.render('pages/registrar')
});

//listar
app.get('/listar', function(req, res) {
    var aprendices = [
        { nombre: 'Cristian', ficha: "2364481", promedio: 4.8},
        { nombre: 'Pertuz', ficha: "2364481", promedio: 4.7},
        { nombre: 'Urrutia', ficha: "2364481",promedio: 4.9}
    ];
    var tagline = "Ficha de la mañana.";

    res.render('pages/listar', {
        matriculados: aprendices,
        frase: tagline
    });
});



app.get("/error", (req, res)=>{
    res.render('pages/error');
})