const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

server.use(express.static('public'))

nunjucks.configure("views", {
    express:server
})

server.set("view engine" , "njk")

server.get("/" , (req, res) => {
    return res.render("cursos")
})

server.get("/sobre" , (req, res) => {
    return res.render("sobre")
})

server.use(function(req, res) {
    res.status(404).render("notfound");
});

server.listen(1717 , () => {
    console.log("servidor online papito")
})