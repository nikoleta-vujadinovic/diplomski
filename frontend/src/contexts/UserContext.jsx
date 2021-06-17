import { createContext, useContext, useEffect, useState } from "react"

import { userService } from "../services/UserService"

import Loading from "../components/Loading"

export const UserContext = createContext({
  user: {},
  isLoggedIn: false,
  onUserLogin: () => {},
  onUserLogout: () => {},
})

export const useUserContext = () => useContext(UserContext)

export const UserContextProvider = (props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  //kada se korisnik prijavi stavljamo ga u state konteksta
  //state isLoggedIn postaje true, korisnik je prijavljen
  const onUserLogin = (user) => {
    setUser(user)
    setIsLoggedIn(true)
  }

  //kada se korisnik odjavi njegov state dobija vrednost {}, odnosno prazan objekat
  //menjamo state isLoggedIn na false
  const onUserLogout = () => {
    userService.logout()
    setUser({})
    setIsLoggedIn(false)
  }

  useEffect(() => {
    //iz servisa pozivamo funkciju koja nam vraća trenutnog korisnika
    //zatim se dobijeni korisnik prosleđuje funkciji koja će ga staviti u state konteksta itd.
    userService.getCurrentUser().then((user) => {
      onUserLogin(user)
    })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <UserContext.Provider
      value={{ user, setUser, isLoggedIn, onUserLogin, onUserLogout }}
    >
      {props.children}
    </UserContext.Provider>
  )
}
