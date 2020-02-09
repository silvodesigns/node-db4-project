
exports.up = function(knex) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name').notNullable().unique();
    })
    .createTable('ingredients', tbl =>{
        tbl.increments();
        tbl.string('name').notNullable().unique();
    })
    .createTable('measurements', tbl => {
        tbl.increments();
        tbl.float('quantity').notNullable();
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('step_number').notNullable();
        tbl.text('instructions').notNullable();
        tbl.integer('recipe_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('recipes');
    })
    .createTable('recipes_ingredients_measurements', tbl => {
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')

        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')

        tbl.integer('measurement_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('measurements')

        tbl.primary(['recipe_id', 'ingredient_id', 'measurement_id'])
    })

    
  
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients_measurements')
    .dropTableIfExists('steps')
    .dropTableIfExists('measurements')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
  
};
