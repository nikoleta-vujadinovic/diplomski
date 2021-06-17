import { api } from "./Api"
import Order from "../models/Order"

class OrderService {
  createOrder = (order) =>
    api
      .post("/order/create.php", {
        userId: order.userId,
        planId: order.planId,
        numberOfRecipes: order.numberOfRecipes,
        numberOfPeople: order.numberOfPeople,
        address: order.address,
        city: order.city,
        zipCode: order.zipCode,
        telephone: order.telephone,
      })
      .then((order) => new Order(order))

  getAllOrders = () =>
    api
      .get("/order/read.php")
      .then((orders) => orders.map((order) => new Order(order)))

  getOrderById = (id) =>
    api.get("/order/read.php/?id=" + id).then((order) => new Order(order))

  getOrdersByUser = (userId) =>
    api
      .get("/order/read.php/?userId=" + userId)
      .then((orders) => orders.map((order) => new Order(order)))
}

export const orderService = new OrderService()
