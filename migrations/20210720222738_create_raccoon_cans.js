exports.up = function (knex) {
  return knex.schema.createTable("raccoon_cans", (t) => {
    t.increments();
    t.string("kind");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("raccoon_cans");
};
