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
  const res = await query(`SELECT * FROM activities WHERE budget = 1 AND 2 AND 3`);
  return res.rows;
}

export async function getLowEnergy() {
  const res = await query(`SELECT * FROM activities WHERE energy level = 1;`);
  return res.rows;
}
export async function getMediumEnergy() {
  const res = await query(`SELECT * FROM activities WHERE energy level = 2;`);
  return res.rows;
}
export async function getHighEnergy() {
  const res = await query(`SELECT * FROM activities WHERE energy level = 3;`);
  return res.rows;
}

export async function getAllEnergy() {
  const res = await query(
    `SELECT * FROM activities WHERE energy level = 1 AND 2 AND 3;`
  );
  return res.rows;
}

export async function getDogFriendly () {
   const res = await query(
     `SELECT * FROM activities WHERE dog friendly = TRUE;`
   );
   return res.rows;
}
export async function getNotDogFriendly () {
   const res = await query(
     `SELECT * FROM activities WHERE dog friendly = FALSE;`
   );
   return res.rows;
}

export async function patchSaved(activity) {
  await query(`UPDATE activities SET saved = NOT saved WHERE id = $1;`, [activity.id]);
}

