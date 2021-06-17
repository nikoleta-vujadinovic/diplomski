import { Icon, TimeIcon } from "@chakra-ui/icons"
import { Box, Wrap, WrapItem, Center, Text, VStack } from "@chakra-ui/layout"
import { ImSpoonKnife } from "react-icons/im"
const RecipesList = (props) => {
  return (
    <Wrap w="1300px" justify="center">
      {props.recipes.map((recipe) => (
        <WrapItem>
          <Box
            w="280px"
            h="250px"
            bg="white"
            border="1px solid gray"
            borderRadius="13"
            key={recipe.id}
            display="flex"
            flexDirection="column"
          >
            <Box flexGrow="1" />
            <Box textAlign="left" marginBottom="10px" marginLeft="9px">
              <Text>{recipe.name}</Text>
              <Box display="flex" alignItems="center">
                <Icon as={ImSpoonKnife} />
                <Text marginLeft="3px" marginRight="7px">
                  {recipe.prepTime} min.
                </Text>

                <TimeIcon />
                <Text marginLeft="3px">{recipe.cookTime} min.</Text>
              </Box>
            </Box>
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  )
}
export default RecipesList
