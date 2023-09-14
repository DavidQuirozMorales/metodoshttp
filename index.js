const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send("Hola GET")
})

app.post('/', (request, response) => {
    response.send('Hola POST')
})

app.put('/', (request, response) => {
    response.send("Hola PUT")
})

app.patch('/', (request, response) => {
    response.send("Hola PATCH")
})

app.delete('/', (request, response) => {
    response.send("Hola DELETE")
})

//EN UN NAVEGADOR SOLAMENTE ES SOPORTABLE EL GET
//Instalar postman o Insomnia



/*
*
*FUNCIONALIDAD
*
*/
//http://localhost:3001
app.listen(3000, () =>{
    console.log('listening on port 3000')
})