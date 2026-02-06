const users =  `
     
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        dt_birth DATE NOT NULL,
        CPF TEXT NOT NULL UNIQUE,
        register TEXT NOT NULL UNIQUE,
        tp_prest TEXT NOT NULL
    )
`;

const patient = `

    CREATE TABLE IF NOT EXISTS patient (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    name_mother TEXT NOT NULL,
    dt_birth DATE NOT NULL,
    CPF TEXT NOT NULL UNIQUE
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

const product = `
    CREATE TABLE IF NOT EXISTS product (
    id_prod INTEGER PRIMARY KEY AUTOINCREMENT,
    desc_product TEXT NOT NULL,
    dt_maturity TEXT NOT NULL, 
    amount INTEGER NOT NULL
);
`

const item_presc = `
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    id_prod INTEGER NOT NULL,
    desc_item TEXT NOT NULL,
    active INTEGER NOT NULL, 
    FOREIGN KEY (id_prod) REFERENCES product(id_prod)
`



export {users,frequency, patient, medication, product, item_presc}