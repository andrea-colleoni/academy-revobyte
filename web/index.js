// carico la libreria (pacchetto) express
const express = require('express')
// istanzio la variabile app che contiene il "programma" express, che è un web server
const app = express()
 
// questo mi permette di pubblicare del contenuto "statico" con questo web server
app.use(express.static('public'))

 // mappatura di un metodo GET all'URL /, con relativa risposta
app.get('/', function (req, res) {
  res.send('Hello World')
})
// in http esistono metodi: GET, POST, PUT, PATCH, DELETE,...

app.get('/saluta', function(req, res) {
    res.send('Ciao a te...')
})

app.get('/somma', function(req, res) {
    console.log(req.query)
    var addendo1 = +req.query.a
    if(addendo1 > 100) {
        res.send(500)
    } else {
        var addendo2 = +req.query.b
        // back tick => ALT + 96: serve per interpolare stringhe e variabili
        res.send(`<html><body><h1>Il risultato della somma è: <u>${addendo1 + addendo2}</u></body></html>`)
    }
});

app.get('/somma-ws', function(req, res) {
    console.log(req.query)
    var addendo1 = +req.query.a
    if(addendo1 > 100) {
        res.send(500)
    } else {
        var addendo2 = +req.query.b
        // rispondo con un oggetto
        res.send({ risultato: addendo1 + addendo2 })
    }
});
 
app.listen(3000)