import { Box, Center, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { recipeService } from "../../../services/RecipeService"
import FiltersBar from "./FiltersBar"
import RecipesList from "./RecipesList"
import Loading from "../../Loading"

const RecipesPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    setIsLoading(true)
    recipeService
      .getAllRecipes()
      .then((recipes) => {
        setRecipes(recipes)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Box>
      <VStack marginTop="90px">
        <FiltersBar setRecipes={setRecipes} />
        <RecipesList recipes={recipes} />
      </VStack>
    </Box>
  )
}
export default RecipesPage
