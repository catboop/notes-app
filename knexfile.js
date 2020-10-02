/* You may need to fix this file? */
require('dotenv').config()

const DATABASE_USER = process.env.DB_USER;
const DATABASE_NAME = "notes_app";
const DATABASE_HOST = "127.0.0.1";
const DATABASE_PORT = "5432";
const DATABASE_URL =
  process.env.DATABASE_URL ||
  `postgres://${process.env.DB_USER}@127.0.0.1:5432/notes_app`;

module.exports = {
  client: "pg",
  connection: {
    connectionString: DATABASE_URL || {
    host: DATABASE_HOST,
    port: DATABASE_PORT,
    user: DATABASE_USER,
    database: DATABASE_NAME
    },
    // ssl: { rejectUnauthorized: false },
  },
  searchPath: "public",
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: __dirname + "/models/migrations",
  },
  seeds: {
    directory: __dirname + "/models/seeds",
  },
};
