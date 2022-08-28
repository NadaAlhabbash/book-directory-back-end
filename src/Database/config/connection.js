const { Pool } = require("pg");
require('dotenv').config();
const { DEV_DB_URI,  DATABASE_URL, NODE_ENV } = process.env;

let dbUrl = "";

switch (NODE_ENV) {
  case 'production':
      dbUrl =  DATABASE_URL;
      break;
  case "development":
    dbUrl = DEV_DB_URI;
    break;
  default:
    throw new Error("No database found");
}

const options = {
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false,
  },
};

module.exports = new Pool(options);

