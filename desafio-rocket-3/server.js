const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { request } = require('express')
const cursos = require('./data')

server.use(express.static('public'))

nunjucks.configure("views", {
    express:server,
    noCache: true,
    autoescape: false
})

server.set("view engine" , "njk")

server.get("/" , (req, res) => {
    const cursos = require('./data')

    return res.render("cursos" , {cursos})
})

server.get("/sobre" , (req, res) => {
    const sobre = {
        img: "/assets/seat.jpg",
        nome: "Rocketseat",
        info: "<p>No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.</p>",
    }
    return res.render("sobre" , {sobre})
})

server.get("/cursos/:id", function(req, res) {
    const id = req.params.id;

    const curso = cursos.find((curso) => {   
        return curso.id == id                          
    })

    if(!curso){
        return res.render("not-found")
    }

    return res.render(`infocursos` , {item: curso});
    });


server.use(function(req, res) {
    res.status(404).render("notfound");
})

server.listen(1717 , () => {
    console.log("servidor online papito")
})