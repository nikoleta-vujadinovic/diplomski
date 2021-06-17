import { SearchIcon } from "@chakra-ui/icons"
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Text,
} from "@chakra-ui/react"
import { useState } from "react"
import { recipeService } from "../../../services/RecipeService"
const SearchBox = (props) => {
  const [recipeName, setRecipeName] = useState("")

  const onInputChange = (event) => {
    setRecipeName(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    if (recipeName !== "") {
      recipeService.getRecipesByName(recipeName).then((recipes) => {
        props.setRecipes(recipes)
      })
      setRecipeName("")
    }
  }

  return (
    <InputGroup width="300px">
      <InputRightElement>
        <IconButton
          onClick={onSearch}
          bg="green.200"
          icon={<SearchIcon color="white" />}
          _hover={{
            textDecoration: "none",
          }}
          _hover={{
            textDecoration: "none",
          }}
          variant="ghost"
          borderLeftRadius="0"
        />
      </InputRightElement>
      <Input
        type="text"
        placeholder="Pretraži po imenu"
        focusBorderColor="green.200"
        value={recipeName}
        onChange={onInputChange}
      />
    </InputGroup>
  )
}
export default SearchBox
