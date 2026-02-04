import express from 'express';
import db from './database/db.js'
import users from './tables/tables.js'

const app = express();
app.use(express.json());

db.run(users)

console.log(users)

app.get('/api', (req,res) => {
    res.send("Api rodando")
})

app.listen(3000, () => {
    console.log('servidor rodando em http://localhost:3000')
})