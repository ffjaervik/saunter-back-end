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
    `SELECT * FROM activities WHERE budget = 3;`
  );
  return res.rows;
}

export async function patchSaved(activity) {
  await query(`UPDATE activities SET saved = NOT saved WHERE id = $1;`, [activity.id]);
}

