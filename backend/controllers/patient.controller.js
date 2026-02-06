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

//read
export function search_patient(req, res) {
  const { cpf } = req.params;

  const sql = "SELECT * FROM patient WHERE CPF = ?";

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

export function list_patient(req, res) {
  const sql = "SELECT * FROM patient";

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
export function delete_patient (req, res) {

  const sql = "DELETE FROM patient WHERE cpf = ?";
  
  db.run(sql,[req.params.cpf], (err) => {

      if(err) {
        return res.status(500).json(err);
      } else {
         return res.status(200).json({message:"Paciente deletado com sucesso"})
      }

  })
}

//update/patch
export function patientATT(req, res) {
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
    UPDATE patient
    SET ${fields.join(", ")}
    WHERE cpf = ?
  `;

  values.push(cpf);

  db.run(sql, values, function (err) {
    if (err) {
      return res.status(500).json({ erro: err.message });
    }

    if (this.changes === 0) {
      return res.status(404).json({ erro: "Paciente não encontrado" });
    }

    return res.status(200).json({
      mensagem: "Paciente atualizado com sucesso"
    });
  });
}

