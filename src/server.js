const express = require("express")

const server = express()

//pegar DB

const db = require ("./database/db")

const nunJuscks = require("nunjucks")
const { response } = require("express")
nunJuscks.configure("src/views", {
   express: server,
   noCache: true
})


//configurar uma pasta publica
server.use(express.static("public"))

//habilitar o uso do requiry.body
server.use(express.urlencoded({
   extended:true
}))

//criando um servidor
server.get("/", (require, response) => {
  return response.render("index.html", {title: "Seu marketplace de coleta de resíduos"})
})

server.get("/create-point", (require, response) => {
   return response.render("create-point.html")
})

server.post("/savepoint", (require, response) =>{
//inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items

        )VALUES(?,?,?,?,?,?,?);  
    `
    
    const values = [
      require.body.image,
      require.body.name,
      require.body.address,
      require.body.address2,
      require.body.state,
      require.body.city,
      require.body.items
        
    ]

    function afterInsertData(err){
        if(err) {
         
         return response.render("create-point.html", { saved:false })  
         
        }

        return response.render("create-point.html", { saved:true })  
      }
    db.run(query, values, afterInsertData)
   
    
     
})

server.get("/search", (require, response) => {

   const search = require.query.search

   if(search == ""){
      return response.render("search-results.html", { total: 0 })
   }
   //pegar dados do banco de dados
   db.all(`SELECT * FROM places WHERE city LIKE  '%${search}%'`, function(err, rows){
      if(err) {
         return console.log(err)
      }   
      
      const total = rows.length
      //mostrar a pagina html com os dados do bd
      return response.render("search-results.html", { places: rows , total: total })


   })

   
})




//iniciando o servidor
server.listen(3000)