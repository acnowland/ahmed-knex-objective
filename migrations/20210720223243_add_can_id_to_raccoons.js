exports.up = function (knex) {
  return knex.schema.table("raccoons", (t) => {
    t.integer("can_id").references("id").inTable("raccoon_cans");
  });
};

exports.down = function (knex) {
  return knex.schema.table("raccoons", (t) => {
    t.dropColumn("can_id");
  });
};
