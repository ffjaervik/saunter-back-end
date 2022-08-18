import { query } from "../index.js"

// deletes resources table
async function dropTable() {
  const res = await query(`DROP TABLE IF EXISTS dayplans;`);

  console.log(res.command, "dropped dayplans table");
}

dropTable();