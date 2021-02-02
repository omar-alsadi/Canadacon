import React, { useEffect } from "react"

import { GlobalStyle } from "./styles/GlobalStyle"
import { useStateValue } from './StateProvider'

import { isUserAuthenticated } from "../firebase.utilities"
import NavBar from "../components/Navbar"
import Footer from "../components/Footer"
import SEO from "../components/seo"
import useFirebase from "../useFirebase"


const Layout = ({ children, title, color }) => {

  const [{ isUserSigned }, dispatch] = useStateValue();

  const firebase = useFirebase();

  useEffect(() => {
    if (!firebase) return;
    if (isUserSigned) return dispatch(isUserAuthenticated(dispatch));
  }, [firebase]);


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
