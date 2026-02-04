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

