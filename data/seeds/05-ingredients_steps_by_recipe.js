exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients_steps_by_recipe")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients_steps_by_recipe").insert([
        { recipe_id: 1, step_id: 1, ingredient_id: 1, quantity: null },
        { recipe_id: 1, step_id: 2, ingredient_id: 2, quantity: 1 },
        { recipe_id: 1, step_id: 3, ingredient_id: null, quantity: null },
        { recipe_id: 2, step_id: 4, ingredient_id: 3, quantity: 2 },
        { recipe_id: 2, step_id: 5, ingredient_id: 4, quantity: 0.5 },
        { recipe_id: 3, step_id: 6, ingredient_id: 5, quantity: 1 },
        { recipe_id: 4, step_id: 7, ingredient_id: 3, quantity: 2 },
        { recipe_id: 4, step_id: 7, ingredient_id: 6, quantity: 0.5 },
        { recipe_id: 4, step_id: 7, ingredient_id: 7, quantity: 0.5 },
        { recipe_id: 4, step_id: 8, ingredient_id: 8, quantity: 4 },
        { recipe_id: 4, step_id: 8, ingredient_id: 9, quantity: 2 },
        { recipe_id: 4, step_id: 8, ingredient_id: 10, quantity: 0.25 },
        { recipe_id: 4, step_id: 8, ingredient_id: 11, quantity: 0.75 },
        { recipe_id: 5, step_id: 9, ingredient_id: 24, quantity: 6 },
        { recipe_id: 5, step_id: 10, ingredient_id: 12, quantity: 1 },
        { recipe_id: 5, step_id: 11, ingredient_id: 13, quantity: 1 },
        { recipe_id: 5, step_id: 13, ingredient_id: 14, quantity: 0.25 },
        { recipe_id: 6, step_id: 14, ingredient_id: 15, quantity: 50 },
        { recipe_id: 6, step_id: 15, ingredient_id: 6, quantity: 1 },
        { recipe_id: 6, step_id: 15, ingredient_id: 16, quantity: 0.5 },
        { recipe_id: 6, step_id: 15, ingredient_id: 9, quantity: 6 },
        { recipe_id: 6, step_id: 15, ingredient_id: null, quantity: null },
        { recipe_id: 6, step_id: 16, ingredient_id: 18, quantity: 0.4 },
        { recipe_id: 6, step_id: 16, ingredient_id: 19, quantity: 0.4 },
        { recipe_id: 6, step_id: 16, ingredient_id: 20, quantity: 0.4 },
        { recipe_id: 7, step_id: 17, ingredient_id: 21, quantity: 0.1 },
        { recipe_id: 7, step_id: 18, ingredient_id: null, quantity: null },
        { recipe_id: 8, step_id: 19, ingredient_id: 22, quantity: null },
        { recipe_id: 8, step_id: 20, ingredient_id: 22, quantity: 2 },
        { recipe_id: 8, step_id: 20, ingredient_id: 23, quantity: 1.5 },
        { recipe_id: 8, step_id: 20, ingredient_id: 24, quantity: 1.5 },
        { recipe_id: 8, step_id: 20, ingredient_id: 25, quantity: 2 },
        { recipe_id: 8, step_id: 21, ingredient_id: null, quantity: null },
        { recipe_id: 8, step_id: 22, ingredient_id: null, quantity: null },
      ]);
    });
};
