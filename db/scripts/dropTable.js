import { query } from "../index.js"

// deletes resources table
async function dropTable() {
  const res = await query(`DROP TABLE IF EXISTS activities;`);

  console.log(res.command, "dropped activities table");
}

dropTable();