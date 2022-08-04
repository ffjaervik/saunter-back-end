import { query } from "../index.js";
import activities from "../../libs/activities.js";
// populates resources table with the given data
async function populateTable() {
  for (let i = 0; i < activities.length; i++) {
    const response = await query(
      `INSERT INTO activities (name, type, description, budget, energy_level, dog_friendly, saved, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;`,
      [
        activities[i].name,
        activities[i].type,
        activities[i].description,
        activities[i].budget,
        activities[i].energy_level,
        activities[i].dog_friendly,
        activities[i].saved,
        activities[i].image,
      ]
    );
    console.log(response.rows);
  }
}
populateTable();