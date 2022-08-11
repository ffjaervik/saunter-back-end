import { query } from '../index.js'

const sqlString = `CREATE TABLE IF NOT EXISTS dayplans (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT,
    activities TEXT
);`

async function createDayplan() {
	const res = await query(sqlString)
	console.log(res.rows[0], 'inserted')
}
createDayplan()
