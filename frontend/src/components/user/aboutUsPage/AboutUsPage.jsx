import { CheckIcon } from "@chakra-ui/icons"
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react"

const AboutUsPage = () => {
  return (
    <Box marginTop="90px" display="flex" flexDirection="column">
      <Center>
        <Box alignText="center" w="600px">
          <Heading fontSize="3xl">Naslov</Heading>
          <Text color="gray.600" fontSize="xl">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Text>
        </Box>
      </Center>
      <Box marginTop="40px" display="flex" flexDirection="column">
        <Center>
          <HStack spacing="150px">
            <Box textAlign="left">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Icon as={CheckIcon} color="green.400" marginRight="10px" />
                <Text fontWeight="600">Lorem ipsum dolor sit amet</Text>
              </Box>

              <Text marginLeft="25px" color="gray.600" maxW="400px">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </Box>
            <Box textAlign="left">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Icon as={CheckIcon} color="green.400" marginRight="10px" />
                <Text fontWeight="600">Lorem ipsum dolor sit amet</Text>
              </Box>

              <Text marginLeft="25px" color="gray.600" maxW="400px">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </Box>
          </HStack>
        </Center>
        <Center>
          <HStack marginTop="30px" spacing="150px">
            <Box textAlign="left">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Icon as={CheckIcon} color="green.400" marginRight="10px" />
                <Text fontWeight="600">Lorem ipsum dolor sit amet</Text>
              </Box>

              <Text marginLeft="25px" color="gray.600" maxW="400px">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </Box>
            <Box textAlign="left">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Icon as={CheckIcon} color="green.400" marginRight="10px" />
                <Text fontWeight="600">Lorem ipsum dolor sit amet</Text>
              </Box>

              <Text marginLeft="25px" color="gray.600" maxW="400px">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </Box>
          </HStack>
        </Center>
        <Center>
          <HStack marginTop="30px" spacing="150px">
            <Box textAlign="left">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Icon as={CheckIcon} color="green.400" marginRight="10px" />
                <Text fontWeight="600">Lorem ipsum dolor sit amet</Text>
              </Box>

              <Text marginLeft="25px" color="gray.600" maxW="400px">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </Box>
            <Box textAlign="left">
              <Box display="flex" flexDirection="row" alignItems="center">
                <Icon as={CheckIcon} color="green.400" marginRight="10px" />
                <Text fontWeight="600">Lorem ipsum dolor sit amet</Text>
              </Box>

              <Text marginLeft="25px" color="gray.600" maxW="400px">
                {" "}
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </Text>
            </Box>
          </HStack>
        </Center>
      </Box>
    </Box>
  )
}
export default AboutUsPage
