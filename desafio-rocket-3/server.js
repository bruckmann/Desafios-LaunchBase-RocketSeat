const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

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

server.use(function(req, res) {
    res.status(404).render("notfound");
})

server.listen(1717 , () => {
    console.log("servidor online papito")
})