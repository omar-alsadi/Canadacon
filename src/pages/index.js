import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Events from "../components/Events"
import Testimonials from "../components/Testimonials"
import Stats from "../components/Stats"
import Subscribtion from "../components/Subscribtion"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <SEO title="Home" />
      <Header color={'#fff'} />
      <Events />
      <Testimonials />
      <Stats />
      <Subscribtion />
      <Footer />
    </Layout>
  )
}

export default IndexPage
