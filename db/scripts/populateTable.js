import { query } from "../index.js";
import activities from "../../libs/activities.js";
// populates resources table with the given data
async function populateTable() {
  for (let i = 0; i < activities.length; i++) {
    const response = await query(
      `INSERT INTO activities (name, budget, saved, image) VALUES ($1, $2, $3, $4) RETURNING *;`,
      [
        activities[i].name,
        activities[i].budget,
        activities[i].saved,
        activities[i].image,
      ]
    );
    console.log(response.rows);
  }
}
populateTable();