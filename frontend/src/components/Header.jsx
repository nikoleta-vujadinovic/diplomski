import { useUserContext } from "../contexts/UserContext"

import { default as UserHeader } from "./user/Header"
import { default as ManagerHeader } from "./manager/Header"
import { default as AdminHeader } from "./admin/Header"

const Header = () => {
  const { user, isLoggedIn } = useUserContext()

  //proverava da li korisnik uzet iz konteksta postoji
  //ako postoji, koja je njegova uloga
  //i na osnovu korisnikove uloge prikazuje različite hedere
  //ako korisnik ne postoji prikazaće se default vrednost
  const getHeader = () => {
    switch (user?.role) {
      case "Korisnik":
        return <UserHeader isLoggedIn={isLoggedIn} />
      case "Menadžer":
        return <ManagerHeader />
      case "Administrator":
        return <AdminHeader />
      default:
        return <UserHeader />
    }
  }

  //pozivanjem ove funkcije dobijamo željeni heder
  return <>{getHeader()}</>
}

export default Header
