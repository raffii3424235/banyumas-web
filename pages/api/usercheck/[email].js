export default async function handler(req, res) {
  const { email } = req.query;

  const mysql2 = require("mysql2/promise");

  const dbs = await mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
  });

  const sql = `SELECT * FROM users WHERE email = ?`;
  const [user] = await dbs.query(sql, [email]);

  res.status(200).json(user);
}
