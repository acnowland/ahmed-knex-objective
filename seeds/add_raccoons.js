exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("raccoons")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("raccoons").insert([
        { name: "moe", age: 51, can_id: 4 },
        { name: "larry", age: 66, can_id: 5 },
        { name: "curly", age: 71, can_id: 4 },
      ]);
    });
};
