class Order {
  constructor(order) {
    this.id = order.id
    this.userId = order.userId
    this.userFirstName = order.userFirstName
    this.userLastName = order.userLastName
    this.planId = order.planId
    this.planName = order.planName
    this.planPricePerMeal = order.planPricePerMeal
    this.numberOfRecipes = order.numberOfRecipes
    this.numberOfPeople = order.numberOfPeople
    this.address = order.address
    this.city = order.city
    this.zipCode = order.zipCode
    this.telephone = order.telephone
    this.totalPrice = order.totalPrice
  }
}

export default Order
