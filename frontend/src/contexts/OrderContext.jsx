import { createContext, useContext, useState } from "react"
import { useHistory } from "react-router"
import { useUserContext } from "./UserContext"
import { orderService } from "../services/OrderService"

export const OrderContext = createContext({
  currentStep: null,
  onNextStep: () => {},
  onPreviousStep: () => {},
  selectedPlan: null,
  onSelectPlan: () => {},
  order: null,
  selectedRecipes: [],
  onSelectRecipe: () => {},
  onOrder: () => {},
})
export const useOrderContext = () => useContext(OrderContext)

export const OrderContextProvider = (props) => {
  const { user } = useUserContext()

  const history = useHistory()

  const [currentStep, setCurrentStep] = useState(1)
  const onNextStep = () => {
    setCurrentStep((currentStep) => currentStep + 1)
  }
  const onPreviousStep = () => {
    setCurrentStep((currentStep) => currentStep - 1)
  }

  const [selectedPlan, setSelectedPlan] = useState(null)
  const onSelectPlan = (selectedPlan) => {
    setSelectedPlan(selectedPlan)
  }

  const [order, setOrder] = useState({
    userId: "",
    planId: "",
    numberOfRecipes: 1,
    numberOfPeople: 1,
    address: "",
    city: "",
    zipCode: 0,
    telephone: "",
  })

  const [selectedRecipes, setSelectedRecipes] = useState([])
  const onSelectRecipe = (recipeId) => {
    console.log(recipeId)
    if (selectedRecipes.find((id) => id === recipeId)) {
      setSelectedRecipes((selectedRecipes) =>
        selectedRecipes.filter((id) => id !== recipeId)
      )
    } else if (selectedRecipes.length < order.numberOfRecipes) {
      setSelectedRecipes((selectedRecipes) => [...selectedRecipes, recipeId])
    }
  }

  const onOrder = (event) => {
    event.preventDefault()
    orderService
      .createOrder({ ...order, userId: user.id, recipes: selectedRecipes })
      .then(() => {
        history.push("/")
      })
  }

  return (
    <OrderContext.Provider
      value={{
        currentStep,
        onNextStep,
        onPreviousStep,
        selectedPlan,
        onSelectPlan,
        order,
        setOrder,
        selectedRecipes,
        onSelectRecipe,
        onOrder,
      }}
    >
      {props.children}
    </OrderContext.Provider>
  )
}
