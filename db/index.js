
import pg from 'pg';
export const pool = new pg.Pool({
  connectionString:
    "postgres://hsnqbnzphmbbkn:af1a03860fb5c34077229fac9648ae0db7d1f7d5589227c21b87c10aacba492c@ec2-34-252-216-149.eu-west-1.compute.amazonaws.com:5432/d8sm9mdpakvqo9",
  ssl: {
    rejectUnauthorized: false,
  },
});
 export function query(text, params, callback){
  return pool.query(text, params, callback);
}
 
