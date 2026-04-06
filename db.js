const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test_db',
  waitForConnections: true,
  connectionLimit: 10,
  port: 8889
});

module.exports = pool;