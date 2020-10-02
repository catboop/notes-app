const Knex = require("knex");
const config = require("../knexfile")

const knex = Knex(config);

module.exports = knex;
