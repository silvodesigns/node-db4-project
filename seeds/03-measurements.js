
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('measurements').insert([
        {quantity: 1.5},
        {quantity: 1.8},
        {quantity: 1.9 }
      ]);
    });
};
