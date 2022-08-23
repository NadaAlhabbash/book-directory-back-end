const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "bookdirectory",
  password: "Database28",
  port: 5432,
});

module.exports = pool;
