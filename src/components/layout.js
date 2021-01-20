import React from "react"
import { StateProvider } from './StateProvider'

import { GlobalStyle } from "./styles/GlobalStyle"

import Reducer, { INITIAL_STATE } from './../Reducer'

const Layout = ({ children }) => {


  return (
    <StateProvider initialState={INITIAL_STATE} reducer={Reducer}>
      <GlobalStyle />
      <main>{children}</main>
    </StateProvider>
  )
}

export default Layout
