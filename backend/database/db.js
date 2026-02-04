import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./database/mednv.db', (err) => {

    if ( err ) {
        console.error("Erro ao criar banco de dados")
    } else {
        console.log("Sucesso ao criar banco de dados!")
    }
})

export default db;



