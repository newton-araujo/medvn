import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.resolve(process.cwd(), "./database/mednv.db");

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("Erro ao conectar ao banco de dados:", err.message);
  } else {
    console.log("Banco de dados conectado com sucesso");
  }
});


export default db;




