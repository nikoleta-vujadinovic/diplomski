import { Box } from "@chakra-ui/layout"
import SearchBox from "./SearchBox"
import SelectMenu from "./SelectMenu"

const FiltersBar = (props) => {
  return (
    <Box
      display="flex"
      w="1190px"
      height="60px"
      alignItems="center"
      borderRadius="xl"
      p="23px"
      marginBottom="20px"
    >
      <SelectMenu setRecipes={props.setRecipes} />

      <Box flexGrow="1" />
      <SearchBox setRecipes={props.setRecipes} />
    </Box>
  )
}
export default FiltersBar
