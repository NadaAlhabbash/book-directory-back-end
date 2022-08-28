const { readFileSync } = require('fs');
const { join } = require('path');
const connection = require('../config/connection');

const createTables = () => {
  const path = join(__dirname, 'init.sql');
  const sql = readFileSync(path).toString();
  return connection.query(sql);
};

module.exports = createTables;