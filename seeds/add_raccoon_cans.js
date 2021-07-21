exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("raccoon_cans")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("raccoon_cans").insert([
        { kind: "trash" },
        { kind: "recycle" },
        { kind: "compost" },
      ]);
    });
};
