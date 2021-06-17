import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { UserContextProvider } from "./contexts/UserContext"

import Header from "./components/Header"

import "./App.css"
import PlansPage from "./components/user/plansPage/PlansPage"
import RecipesPage from "./components/user/recipesPage/RecipesPage"
import HomePage from "./components/user/homePage/HomePage"
import OrderPage from "./components/user/orderPage/OrderPage"
import { OrderContextProvider } from "./contexts/OrderContext"
import UsersPage from "./components/admin/usersPage/UsersPage"
import ProfilePage from "./components/user/profilePage/ProfilePage"
import AboutUsPage from "./components/user/aboutUsPage/AboutUsPage"

const App = () => {
  return (
    <Router>
      <UserContextProvider>
        <OrderContextProvider>
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/oNama">
                <AboutUsPage />
              </Route>
              <Route path="/planovi">
                <PlansPage />
              </Route>
              <Route path="/recepti">
                <RecipesPage />
              </Route>
              <Route path="/porudzbina">
                <OrderPage />
              </Route>
              <Route path="/profil">
                <ProfilePage />
              </Route>
              <Route path="/admin/korisnici">
                <UsersPage />
              </Route>
            </Switch>
          </div>
        </OrderContextProvider>
      </UserContextProvider>
    </Router>
  )
}

export default App
