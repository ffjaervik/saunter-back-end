
import pg from 'pg';
export const pool = new pg.Pool({
  connectionString:
    "postgres://hmsosdvhfkbofu:faf9e01c975b048388820d43eede8145e936300f0407f5d789b8ec6270d18a59@ec2-54-220-86-118.eu-west-1.compute.amazonaws.com:5432/d7176nhb6i9kj5",

  ssl: {
    rejectUnauthorized: false,
  },
});
 export function query(text, params, callback){
  return pool.query(text, params, callback);
}
 
