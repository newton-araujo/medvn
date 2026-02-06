import db from "../database/db.js";

//create
export function createUser(req, res) {
  const { name, dt_birth, CPF, register, tp_prest } = req.body;

  if (!name) {
    return res.status(400).json({
      erro: "Campo name é obrigatório"
    });
  }

  const sqlInserir = `
    INSERT INTO users (name, dt_birth, CPF, register, tp_prest)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.run(sqlInserir, [name, dt_birth, CPF, register, tp_prest], function (err) {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    }

    return res.status(201).json({
      mensagem: "Usuário criado com sucesso",
      id: this.lastID
    });
  });
}

export function search_ID(req, res) {
  const { cpf } = req.params;

  const sql = "SELECT * FROM users WHERE cpf = ?";

  db.get(sql, [cpf], (err, user) => {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    }

    if (!user) {
      return res.status(404).json({
        erro: "Usuário não encontrado"
      });
    }

    return res.status(200).json(user);
  });
}


export function list_users(req, res) {
  const sql = "SELECT * FROM users";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    }

    return res.status(200).json(rows);
  });
}


//Deleted user

export function delete_user (req, res) {

  const sql = "DELETE FROM users WHERE cpf = ?";
  
  db.run(sql,[req.params.cpf], (err) => {

      if(err) {
        return res.status(500).json(err);
      } else {
         return res.status(200).json({message:"Usuaário deletado com sucesso"})
      }

  })


}

//falta update e delete