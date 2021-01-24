import React from "react"

import Layout from "../components/Layout"
import SignIn from "../components/SignIn"
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="Home" />
        <NavBar color={'black'} />
        <SignIn />
        <Footer />
    </Layout>
)

export default AboutPage
