import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Events from "../components/Events"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Subscribtion from "../components/Subscribtion"

const IndexPage = () => {

  return (
    <Layout title={'Home'} color={'#fff'}>
      <Header />
      <Events />
      <Testimonials />
      <Stats />
      <Subscribtion />
    </Layout>
  )
}

export default IndexPage
