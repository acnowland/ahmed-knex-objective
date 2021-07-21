exports.up = function (knex) {
  return knex.schema.createTable("raccoons", (raccoon) => {
    raccoon.increments();
    raccoon.string("name");
    raccoon.integer("age");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("raccoons");
};
