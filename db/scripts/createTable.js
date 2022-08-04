import { query } from "../index.js"

const sqlString = `CREATE TABLE IF NOT EXISTS activities (
       id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
       name VARCHAR(35),
       type VARCHAR(35),
       description TEXT,
       budget INT NOT NULL CHECK (budget between 1 and 3),
       energy_level INT NOT NULL CHECK (budget between 1 and 3),
       dog_friendly BOOLEAN NOT NULL DEFAULT NULL,
       saved BOOLEAN NOT NULL DEFAULT FALSE,
       image TEXT
);`;
  


async function createTable(){
  const res = await query(sqlString)
  console.log(res.rows[0],"inserted");
}
createTable()