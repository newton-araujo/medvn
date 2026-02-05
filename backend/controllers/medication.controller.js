import db from "../database/db.js";

//create
export function createMedication(req, res) {
  const { name_medication, due_date, amount } = req.body;

  if (!name_medication) {
    return res.status(400).json({
      erro: "Campo nome é obrigatório"
    });
  }

  const sqlInserir = `
    INSERT INTO medication (name_medication, due_date, amount)
    VALUES (?, ?, ?)
  `;

  db.run(sqlInserir, [name_medication, due_date, amount], function (err) {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    }

    return res.status(201).json({
      mensagem: "Medicação criada com sucesso",
      id: this.lastID
    });
  });
}

