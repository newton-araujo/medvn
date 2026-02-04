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
export const patient = ``;

const frequency = `

    CREATE TABLE IF NOT EXISTS frequency (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tp_frequency TEXT NOT NULL
    )
`
export {users,frequency}