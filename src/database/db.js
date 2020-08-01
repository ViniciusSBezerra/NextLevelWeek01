const sqlite3 = require("sqlite3").verbose()

//criar o objeto que ira fazer opçoes  no banco de dados
const db = new sqlite3.Database("./src/database/database.db") 

module.exports = db

// utilizar o objeto de banco de dados, para nossas operacoes

db.serialize(() => {

//     //criar uma tabela com comando sqlite
//     db.run(` 
//         CREATE TABLE IF NOT EXISTS places (
//             id  INTEGER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,  
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
    
//     //inserir dados na tabela
//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city,
//             items

//         )VALUES(?,?,?,?,?,?,?);  
//     `
    
//     const values = [
//         "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//         "Paperside",
//         "Guilherme Gemballa, Jardim America",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do sul",
//         "Papéis e Papelão"
//     ]

//     function afterInsertData(err){
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso")
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData)
      
//     //consultar itens no banco de dados
//     db.all(`SELECT * FROM places`, function(err, rows){
//         if(err) {
//             return console.log(err)
//         }   

//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })

    //deletar dados da tabela

    // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
    //     if(err){
    //         return console.log(err)
    //     }
    //         console.log("Registros deletados com sucesso!")
    // })
  
})

