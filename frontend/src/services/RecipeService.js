import { api } from "./Api"

import Recipe from "../models/Recipe"

class RecipeService {
  createRecipe = (recipe) =>
    api
      .post("/recipe/create.php", {
        name: recipe.name,
        description: recipe.description,
        image: recipe.image,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
      })
      .then((recipe) => new Recipe(recipe))

  getAllRecipes = () =>
    api
      .get("/recipe/read.php")
      .then((recipes) => recipes.map((recipe) => new Recipe(recipe)))

  getRecipeById = (id) =>
    api.get("/recipe/read.php/?id=" + id).then((recipe) => new Recipe(recipe))

  getRecipesByCategory = (planId) =>
    api
      .get("/recipe/read.php/?planId=" + planId)
      .then((r) => {
        console.log(r)
        return r
      })
      .then((recipes) =>
        recipes.map((recipe) => new Recipe({ ...recipe, id: recipe.recipeId }))
      )

  getRecipesByName = (recipeName) =>
    api
      .get("/recipe/read.php/?name=" + recipeName)
      .then((recipes) => recipes.map((recipe) => new Recipe(recipe)))

  updateRecipe = (recipe) =>
    api
      .put("/recipe/update.php/?id=" + recipe.id, {
        name: recipe.name,
        description: recipe.description,
        image: recipe.image,
        prepTime: recipe.prepTime,
        cookTime: recipe.cookTime,
      })
      .then((recipe) => new Recipe(recipe))

  deleteRecipe = (id) => api.delete("/recipe/delete.php/?id=" + id)
}
export const recipeService = new RecipeService()
