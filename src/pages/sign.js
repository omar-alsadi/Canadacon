import React from "react"
import { navigate } from 'gatsby'

import { useStateValue } from "../components/StateProvider"
import Layout from "../components/Layout"
import SignIn from "../components/SignIn"

const SignInPage = () => {

    const [{ currentUser }] = useStateValue()

    if (currentUser && window.location.pathname === `/sign`) {
        return navigate(`/`)
    } else {
        return (
            <Layout title={'Sign In'} color={'black'}>
                <SignIn />
            </Layout>
        )
    }
}

export default SignInPage
