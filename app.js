const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const knex = require("knex");
const databaseOptions = require("./knexfile").development;
const database = knex(databaseOptions);
const { Model } = require("objection");

Model.knex(database);

class Raccoon extends Model {
  static tableName = "raccoons";
}

class Cans extends Model {
  static tableName = "raccoon_cans";

  static relationMappings = {
    raccoons: {
      relation: Model.HasManyRelation,
      modelClass: Raccoon,
      join: {
        from: "raccoon_cans.id",
        to: "raccoons.can_id",
      },
    },
  };
}

app.use(cors());

app.get("/raccoons", (_, response) => {
  Raccoon.query().then((raccoons) => response.status(200).send(raccoons));
});

app.get("/cans", (_, response) => {
  Cans.query()
    .withGraphFetched("raccoons")
    .then((cans) => response.status(200).send(cans));
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
