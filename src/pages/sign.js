import React from "react"
import { navigate } from 'gatsby'

import { useStateValue } from "../components/StateProvider"
import Layout from "../components/Layout"
import SignIn from "../components/SignIn"

const SignInPage = () => {

    const [{ currentUser }] = useStateValue()

    if (currentUser && window.location.pathname === `/sign`) {
        // If we’re not logged in, redirect to the home page.
        navigate(`/`)
        return null
    }


    return (
        <Layout title={'Sign In'} color={'black'}>
            <SignIn />
        </Layout>
    )
}

export default SignInPage
