class User {
  constructor(user) {
    this.id = user.id
    this.firstName = user.firstName
    this.lastName = user.lastName
    this.email = user.email
    this.password = user.password
    this.role = user.role
  }

  isUser = () => this.role === "Korisnik"
  isAdmin = () => this.role === "Administrator"
  isManager = () => this.role === "Menadžer"
}
export default User
