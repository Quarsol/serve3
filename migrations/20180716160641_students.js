exports.up = function(knex) {
  return knex.schema.createTable('students', (table) => {
    table.increments();
    table.string('firstName');
    table.string('lastName');
    table.string('homeTown');
    table.timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('students');
};
