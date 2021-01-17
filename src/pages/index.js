import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import Events from "../components/Events"
import Testimonials from "../components/Testimonials"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Events />
    <Testimonials />
  </Layout>
)

export default IndexPage
