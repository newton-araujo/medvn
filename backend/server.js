import express from "express";
import userRoutes from "./routes/user.routes.js";
import frequencyRoutes from "./routes/frequency.routes.js";
import patientRoutes from "./routes/patient.routes.js";
import medicationRoutes from "./routes/medication.routes.js";
import db from "./database/db.js";
import * as tables from "./tables/tables.js";

db.run(tables.users);
db.run(tables.frequency);
db.run(tables.patient);
db.run(tables.medication);

const app = express();

// middleware
app.use(express.json());

// rotas
app.use("/user", userRoutes);
app.use("/frequency", frequencyRoutes);
app.use("/patient", patientRoutes);
app.use("/medication", medicationRoutes);

app.get("/", (req, res) => {
  res.send("Servidor online 🚀");
});

// servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});



