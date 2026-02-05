const users =  `
     
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        dt_birth DATE NOT NULL,
        CPF TEXT NOT NULL,
        register TEXT,
        tp_prest TEXT NOT NULL
    )
`;

const patient = `

    CREATE TABLE IF NOT EXISTS patient (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    name_mother TEXT NOT NULL,
    dt_birth DATE NOT NULL,
    CPF TEXT NOT NULL
    )
`;

const frequency = `

    CREATE TABLE IF NOT EXISTS frequency (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tp_frequency TEXT NOT NULL
    )
`;

const medication = `

    CREATE TABLE IF NOT EXISTS medication(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name_medication TEXT NOT NULL,
    due_date DATE NOT NULL,
    amount TEXT NOT NULL
    )
`


export {users,frequency, patient, medication}