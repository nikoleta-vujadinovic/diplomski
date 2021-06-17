class Recipe {
  constructor(recipe) {
    this.id = recipe.id
    this.name = recipe.name
    this.description = recipe.description
    this.image = recipe.image
    this.prepTime = recipe.prepTime
    this.cookTime = recipe.cookTime
    this.planId = recipe.planId
  }
}

export default Recipe
