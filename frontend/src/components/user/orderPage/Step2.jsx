import { TimeIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, Text, Wrap, WrapItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useOrderContext } from "../../../contexts/OrderContext"
import { recipeService } from "../../../services/RecipeService"

const Step2 = () => {
  const {
    selectedPlan,
    onPreviousStep,
    onNextStep,
    onSelectRecipe,
    selectedRecipes,
    order,
  } = useOrderContext()

  const [recipes, setRecipes] = useState([])

  const [validationError, setValidationError] = useState("")
  const validation = () => {
    if (selectedRecipes.length !== order.numberOfRecipes) {
      setValidationError("Morate odabrati " + order.numberOfRecipes + "recepta")
    }
  }

  useEffect(() => {
    recipeService.getRecipesByCategory(selectedPlan.id).then((recipes) => {
      console.log(recipes)
      setRecipes(recipes)
    })
    validation()
  }, [])

  return (
    <Box>
      <Text>Odaberite {order.numberOfRecipes} recepta</Text>
      {validationError === " " ? (
        <Text>blabla</Text>
      ) : (
        <Text color="white">Blabla</Text>
      )}

      <Wrap justify="center">
        {recipes.map((recipe) => (
          <WrapItem key={recipe.id}>
            <Box
              w="200px"
              h="150px"
              bg={selectedRecipes.includes(recipe.id) ? "gray.200" : "white "}
              border={
                selectedRecipes.includes(recipe.id)
                  ? "1px solid gray"
                  : "1px solid green "
              }
              borderRadius="13"
              key={recipe.id}
              display="flex"
              flexDirection="column"
              onClick={() => {
                onSelectRecipe(recipe.id)
              }}
            >
              <Box flexGrow="1" />
              <Box textAlign="left" marginBottom="10px" marginLeft="9px">
                <Text>{recipe.name}</Text>
                <Box display="flex" alignItems="center">
                  <Text marginRight="7px">{recipe.prepTime} min.</Text>

                  <TimeIcon />
                  <Text marginLeft="3px">{recipe.cookTime} min.</Text>
                </Box>
              </Box>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <Button onClick={onPreviousStep}>Nazad</Button>
      {validationError === "" ? (
        <Button onClick={onNextStep}>Napred</Button>
      ) : (
        <Button>Napred</Button>
      )}
    </Box>
  )
}
export default Step2
