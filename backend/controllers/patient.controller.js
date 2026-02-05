import db from "../database/db.js";

//create
export function createPatient(req, res) {
  const { name, name_mother, dt_birth, CPF } = req.body;

  if (!name) {
    return res.status(400).json({
      erro: "Campo name é obrigatório"
    });
  }

  const sqlInserir = `
    INSERT INTO patient (name, name_mother, dt_birth, CPF)
    VALUES (?, ?, ?, ?)
  `;

  db.run(sqlInserir, [name, name_mother, dt_birth, CPF], function (err) {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    }

    return res.status(201).json({
      mensagem: "Paciente criado com sucesso",
      id: this.lastID
    });
  });
}


//falta read update e delete