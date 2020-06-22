const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { request } = require('express')

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

    const cursos = {
        "starter": {
            id : "starter",
            description: '<p><span> Seja um programador desejado</span><br>no mercado com esses cursos gratuitos</p>',
            imgUrl: "/assets/starter.svg"
        },

        "launcbase":{
            id: "launchbase",
            description: ' <p><span>Domine a programação do zero</span> e tenha acesso ás melhores oportunidades no mercado</p>',
            imgUrl: "/assets/launcbase.svg"
        },

        "gostack":{
            id: "gostack",
            description: '<p><span>Treinamento imersivo</span> nas tecnologias mais modernas de desenvolvimento web e mobile</p>',
            imgUrl: "assets/gostack.svg"
        }
    }

    return res.render(`cursos/${id}` , {cursos});
    });


server.use(function(req, res) {
    res.status(404).render("notfound");
})

server.listen(1717 , () => {
    console.log("servidor online papito")
})