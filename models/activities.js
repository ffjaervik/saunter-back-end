
import {query} from "../db/index.js";

export async function getLowBudget() {
  const res = await query(
    `SELECT * FROM activities WHERE budget = 1;`
  );
  return res.rows;
}
export async function getMediumBudget() {
  const res = await query(
    `SELECT * FROM activities WHERE budget = 2;`
  );
  return res.rows;
}
export async function getHighBudget() {
  const res = await query(
    `SELECT * FROM activities WHERE budget = 3 ;`
  );
  return res.rows;
}

export async function getAllBudgets() {
  const res = await query(`SELECT * FROM activities;`);
  return res.rows;
}

export async function getLowEnergy() {
  const res = await query(`SELECT * FROM activities WHERE energy_level = 1;`);
  return res.rows;
}
export async function getMediumEnergy() {
  const res = await query(`SELECT * FROM activities WHERE energy_level = 2;`);
  return res.rows;
}
export async function getHighEnergy() {
  const res = await query(`SELECT * FROM activities WHERE energy_level = 3;`);
  return res.rows;
}

export async function getAllEnergy() {
  const res = await query(
    `SELECT * FROM activities;`
  );
  return res.rows;
}

export async function getDogFriendly () {
   const res = await query(
     `SELECT * FROM activities WHERE dog_friendly = TRUE;`
   );
   return res.rows;
}
export async function getNotDogFriendly () {
   const res = await query(
     `SELECT * FROM activities WHERE dog_friendly = FALSE;`
   );
   return res.rows;
}

export async function patchSaved(activity) {
  await query(`UPDATE activities SET saved = NOT saved WHERE id = $1;`, [activity.id]);
}

//DAYPLAN TABLE POST & GET & DELETE
export async function postDayplan (dayplan) {
  const results = await query(
      `INSERT INTO dayplans (name, activities) VALUES ($1, $2) RETURNING *;`, 
      [dayplan.name, dayplan.activities]
  );
}

export async function getDayplan () {
  const results = await query(
    `SELECT * FROM dayplans;`
  );
  return results.rows;
}

export async function deleteDayplan (id) {
  const results = await query(
    `DELETE FROM dayplans WHERE id = $1;`, [id]
  );
  return results.rows;
}

// GET ALL SAVED ACTIVITIES
export async function getSaved () {
  const results = await query(
    `SELECT * FROM activities WHERE saved = TRUE;`
  );
  return results.rows;
}


