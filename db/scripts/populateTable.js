import { query } from "../index.js";
import activities from "../../libs/activities.js";
// populates resources table with the given data
async function populateTable() {
  for (let i = 0; i < activities.length; i++) {
    const response = await query(
      `INSERT INTO activities (name, budget, saved, image, energy_level, dog_friendly) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`,
      [
        activities[i].name,
        activities[i].budget,
        activities[i].saved,
        activities[i].image,
        activities[i].energy_level,
        activities[i].dog_friendly,
      ]
    );
    console.log(response.rows);
  }
}
populateTable();