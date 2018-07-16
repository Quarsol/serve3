exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {id: 1, firstName: 'Alice', lastName: 'Zephyr', homeTown: 'Seattle'},
        {id: 2, firstName: 'Bob', lastName: 'Yellow', homeTown: 'Vancouver'},
        {id: 3, firstName: 'Claire', lastName: 'Xylitol', homeTown: 'Toldeo'},
        {id: 4, firstName: 'Daniel', lastName: 'Winston', homeTown: 'Akron'},
        {id: 5, firstName: 'Edina', lastName: 'Veritas', homeTown: 'Wichita'}
      ]);
    }).then(() => {
        return knex.raw("ALTER SEQUENCE students_id_seq RESTART WITH 6;");
    });
};
