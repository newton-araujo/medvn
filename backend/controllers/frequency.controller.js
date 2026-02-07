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

//read
export function search_frequency(req, res) {
  const { id } = req.params;

  const sql = "SELECT * FROM frequency WHERE id = ?";

  db.get(sql, [id], (err, user) => {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    }

    if (!user) {
      return res.status(404).json({
        erro: "Frequência não encontrada"
      });
    }

    return res.status(200).json(user);
  });
}

export function list_frequency(req, res) {
  const sql = "SELECT * FROM frequency";

  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    } 
    return res.status(200).json(rows);
  });
}

//delete
export function delete_frequency (req, res) {

  const sql = "DELETE FROM frequency WHERE id = ?";
  
  db.run(sql,[req.params.id], (err) => {

      if(err) {
        return res.status(500).json(err);
      } else {
         return res.status(200).json({message:"Frequência deletada com sucesso"})
      }

  })
}

//update/patch
export function frequencyATT(req, res) {
  const { id } = req.params;
  const fields = [];
  const values = [];

  if (!id) {
    return res.status(400).json({ erro: "ID é obrigatório" });
  }

  Object.entries(req.body).forEach(([key, value]) => {
    fields.push(`${key} = ?`);
    values.push(value);
  });

  if (fields.length === 0) {
    return res.status(400).json({ erro: "Nenhum campo para atualizar" });
  }

  const sql = `
    UPDATE frequency
    SET ${fields.join(", ")}
    WHERE id = ?
  `;

  values.push(id);

  db.run(sql, values, function (err) {
    if (err) {
      return res.status(500).json({ erro: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ erro: "Frequência não encontrada" });
    }

    return res.status(200).json({
      mensagem: "Frequência atualizada com sucesso"
    });
  });
}

