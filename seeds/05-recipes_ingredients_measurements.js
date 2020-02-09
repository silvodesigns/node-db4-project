
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients_measurements').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients_measurements').insert([
        {
          recipe_id: 1, ingredient_id:2, measurement_id: 3
        },
        {
          recipe_id: 2, ingredient_id:1, measurement_id: 1
        },
        {
          recipe_id: 3, ingredient_id:3, measurement_id: 2
        },
      ]);
    });
};
