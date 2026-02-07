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

//read
export function search_medication(req, res) {
  const { id } = req.params;

  const sql = "SELECT * FROM medication WHERE id = ?";

  db.get(sql, [id], (err, user) => {
    if (err) {
      return res.status(500).json({
        erro: err.message
      });
    }

    if (!user) {
      return res.status(404).json({
        erro: "Medicação não encontrada"
      });
    }

    return res.status(200).json(user);
  });
}

export function list_medication(req, res) {
  const sql = "SELECT * FROM medication";

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
export function delete_medication (req, res) {

  const sql = "DELETE FROM medication WHERE id = ?";
  
  db.run(sql,[req.params.id], (err) => {

      if(err) {
        return res.status(500).json(err);
      } else {
         return res.status(200).json({message:"Medicação deletada com sucesso"})
      }

  })
}

//update/patch
export function medicationATT(req, res) {
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
    UPDATE medication
    SET ${fields.join(", ")}
    WHERE id = ?
  `;

  values.push(id);

  db.run(sql, values, function (err) {
    if (err) {
      return res.status(500).json({ erro: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ erro: "Medicação não encontrada" });
    }

    return res.status(200).json({
      mensagem: "Medicação atualizada com sucesso"
    });
  });
}
