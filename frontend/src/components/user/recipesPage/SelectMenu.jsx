import {
  ChevronDownIcon,
  ChevronUpIcon,
  Icon,
  SearchIcon,
} from "@chakra-ui/icons"
import { recipeService } from "../../../services/RecipeService"
import { planService } from "../../../services/PlanService"
import {
  Box,
  Button,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"
const SelectMenu = (props) => {
  const [placeholder, setPlaceholder] = useState("Sve")
  const [categories, setCategories] = useState([])

  const changePlaceholder = (event) => {
    setPlaceholder(event.target.name)
  }

  const onSearch = (event) => {
    event.preventDefault()
    if (event.target.name !== "Sve") {
      recipeService.getRecipesByCategory(event.target.value).then((recipes) => {
        props.setRecipes(recipes)
      })
    } else {
      recipeService.getAllRecipes().then((recipes) => {
        props.setRecipes(recipes)
      })
    }
  }
  useEffect(() => {
    planService.getAllPlans().then((plans) => setCategories(plans))
  }, [])
  return (
    <>
      {" "}
      <Text color="gray" pr="15px">
        Kategorije:
      </Text>
      <InputGroup w="250px">
        <Input placeholder={placeholder} isReadOnly />
        <Menu>
          {({ isOpen }) => (
            <InputRightElement>
              <MenuButton
                isActive={isOpen}
                as={IconButton}
                _hover={{
                  textDecoration: "none",
                }}
                _focus={{
                  boxShadow: "none",
                }}
                variant="ghost"
                bg="green.200"
                icon={
                  isOpen ? (
                    <ChevronUpIcon color="white" />
                  ) : (
                    <ChevronDownIcon color="white" />
                  )
                }
                borderLeftRadius="0"
              ></MenuButton>
              <MenuList>
                <MenuItem
                  onClick={(event) => {
                    changePlaceholder(event)
                    onSearch(event)
                  }}
                  value="Sve"
                  name="Sve"
                >
                  Sve
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem
                    value={category.id}
                    name={category.name}
                    onClick={(event) => {
                      changePlaceholder(event)
                      onSearch(event)
                    }}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </MenuList>
            </InputRightElement>
          )}
        </Menu>
      </InputGroup>
    </>
  )
}
export default SelectMenu
