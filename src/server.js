const express = require("express")

const server = express()

const nunJuscks = require("nunjucks")
nunJuscks.configure("src/views", {
   express: server,
   noCache: true
})


//configurar uma pasta publica
server.use(express.static("public"))
//criando um servidor
server.get("/", (require, response) => {
  return response.render("index.html", {title: "Seu marketplace de coleta de resíduos"})
})

server.get("/create-point", (require, response) => {
   return response.render("create-point.html")
})

server.get("/search", (require, response) => {
   return response.render("search-results.html")
})




//iniciando o servidor
server.listen(3000)