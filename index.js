const express = require('express')
const app = express()
// const axios = require('axios')
const bodyParser = require('body-parser')

const categorias = require('./routes/categorias')
const publicacoes = require('./routes/publicacoes')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded())
// se a estrutura('process.env.PORT') return null entao ele usa a porta disponibilizada
const port = process.env.PORT || 3000

app.get('/', async (request, response) => {
   
    response.render('index')
    //response.send(`<h1>olá Fullstack Lab ${i} </h1>`)
    //utiliza-se a crase para inserir variaveis dinamicas $()
    })
app.use('/categorias', categorias)
app.use('/publicacoes', publicacoes)
 
app.listen(port, (err) => {
    if (err) {
        console.log('Aparentemente não está funcionando. ')
    } else {
        console.log('Como-Fazer Server is Running on port: ', port)
    }
})
