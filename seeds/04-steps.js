
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {
          step_number: 1,
          instructions: 'Heat up the pan',
          recipe_id: 1

        },
        {
          step_number: 1,
          instructions: 'Heat up the oven',
          recipe_id: 2

        },
        {
          step_number: 1,
          instructions: 'Heat up the microwave',
          recipe_id: 3

        },
      ]);
    });
};
