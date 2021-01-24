import React, { useEffect } from "react"

import { GlobalStyle } from "./styles/GlobalStyle"
import { useStateValue } from './StateProvider'

import { isUserAuthenticated } from "../firebase.utilities"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import SEO from "../components/seo"


const Layout = ({ children, title, color }) => {

  const [{ isUserSigned }, dispatch] = useStateValue();

  useEffect(() => {
    isUserSigned &&
      dispatch(isUserAuthenticated(dispatch))
  }, [isUserSigned])

  return (
    <>
      <GlobalStyle />
      <main>
        <SEO title={title} />
        <NavBar color={color} />
        {children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
