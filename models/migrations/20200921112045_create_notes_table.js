exports.up = function(knex) {
  return knex.schema.createTable("notes", function(table) {
    table.increments();
    table.string("title");
    table.text("text");
    table.timestamps(false, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("notes");
};
