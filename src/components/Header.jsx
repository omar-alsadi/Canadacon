import React from "react"
import NavBar from "./Navbar"
import Hero from "./Hero"

const Header = ({ color }) => {

  return (
    <>
      <NavBar color={color} />
      <Hero />
    </>
  )

}


export default Header
