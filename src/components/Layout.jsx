import React, { useEffect } from "react"

import { GlobalStyle } from "./styles/GlobalStyle"

import { checkUserSession } from "../actions"
import { StateContext } from './StateProvider'

const Layout = ({ children }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <>
      <GlobalStyle />
      <main>{children}</main>
    </>
  )
}

export default Layout
