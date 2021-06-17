import { Box } from "@chakra-ui/react"
import { useOrderContext } from "../../../contexts/OrderContext"
import Stepper1 from "./Stepper1"
import Stepper2 from "./Stepper2"
import Stepper3 from "./Stepper3"

const StepsBar = () => {
  const { currentStep } = useOrderContext()
  const getCurrentStepper = () => {
    switch (currentStep) {
      case 1:
        return <Stepper1 />
      case 2:
        return <Stepper2 />
      case 3:
        return <Stepper3 />
      default:
        return <Stepper1 />
    }
  }
  return <Box marginBottom="30px">{getCurrentStepper()}</Box>
}
export default StepsBar
