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

//read
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

//update user 
//patch para fazer atuaalizacao parcial
export function userATT(req, res) {
  const { cpf } = req.params;
  const fields = [];
  const values = [];

  if (!cpf) {
    return res.status(400).json({ erro: "CPF é obrigatório" });
  }

  Object.entries(req.body).forEach(([key, value]) => {
    fields.push(`${key} = ?`);
    values.push(value);
  });

  if (fields.length === 0) {
    return res.status(400).json({ erro: "Nenhum campo para atualizar" });
  }

  const sql = `
    UPDATE users
    SET ${fields.join(", ")}
    WHERE cpf = ?
  `;

  values.push(cpf);

  db.run(sql, values, function (err) {
    if (err) {
      return res.status(500).json({ erro: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }

    return res.status(200).json({
      mensagem: "Usuário atualizado com sucesso"
    });
  });
}
