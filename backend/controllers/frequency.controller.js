import db from "../database/db.js";

//create
export function createFrequency(req, res) {
  const { tp_frequency } = req.body;

  if (!tp_frequency) {
    return res.status(400).json({
      erro: "Campo tp_frequency é obrigatório"
    });
  }

  const sqlInserir = `
    INSERT INTO frequency (tp_frequency)
    VALUES (?)
  `;

  db.run(sqlInserir, [tp_frequency], function (err) {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    }

    return res.status(201).json({
      mensagem: "Frequência criada com sucesso",
      id: this.lastID
    });
  });
}

//falta read update e delete
