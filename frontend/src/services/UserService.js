import { api } from "./Api"

import User from "../models/User"

class UserService {
  createUser = (user) =>
    api
      .post("/user/create.php", {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        role: user.role,
      })
      .then((user) => new User(user))

  getAllUsers = () =>
    api
      .get("/user/read.php")
      .then((users) => users.map((user) => new User(user)))

  getUserById = (id) =>
    api.get("/user/read.php/?id=" + id).then((user) => new User(user))

  updateUser = (user) =>
    api
      .post("/user/update.php/?id=" + user.id, {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        role: user.role,
      })
      .then((user) => new User(user))

  deleteUser = (id) => api.delete("/user.delete.php/?id=" + id)

  login = (user) =>
    api
      .post("/auth/login.php", {
        email: user.email,
        password: user.password,
      })
      .then((user) => new User(user))

  logout = () => api.delete("/auth/logout.php")

  getCurrentUser = () =>
    api.get("/auth/user.php").then((user) => {
      if (user) {
        return new User(user)
      }
      return null
    })
}
export const userService = new UserService()
