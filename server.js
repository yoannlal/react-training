import express from "express";
import { recipes } from "./recipes.js";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 5000;

let recipesJson = recipes;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World 2!");
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.get("/recipes", (req, res) => {
  res.json({ data: recipesJson, status: 200 });
});

app.post("/recipes", (req, res) => {
  const newRecipe = {
    ...req.body,
    uuid: recipesJson[recipesJson.length - 1].uuid + 1,
  };

  recipesJson.push(newRecipe);

  res.json({ data: newRecipe, status: 200 });
});

// Edit recipe
// app.put("/recipes/:recipeId", (req, res) => {
//   const recipesJson = recipes;

//   res.json({ data: recipesJson, status: 200 });
// });

// Delete recipe
// app.delete("/recipes/:recipeId", (req, res) => {
//   const recipesJson = recipes;

//   res.json({ data: recipesJson, status: 200 });
// });

//

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
