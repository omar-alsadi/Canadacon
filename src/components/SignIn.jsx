import React from "react"
import { SignContainer, SignWrap, SignTitle, BtnWrapper, FacebookIcon, GoogleIcon, Btn } from './styles/SignIn.style'
import { useStateValue } from './StateProvider'
import { setStorage } from '../Reducer'
import { signInWithFB, signInWithGoogle } from '../firebase.utilities'
import { useStaticQuery, graphql } from 'gatsby'

const SignIn = () => {

    const Wallpapre = useStaticQuery(graphql`
            query WallpaperQuery {
                allFile(filter: {name: {in: "sign-wp"}}) {
                    edges {
                        node {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
    `)

    const [{ isEnglish, currentUser, navScrolled }, dispatch] = useStateValue();

    ///////////////// FACEBOOK SDK //////////////////

    setStorage(isEnglish, navScrolled, currentUser)

    return (
        <SignContainer css={`background: url(${Wallpapre.allFile.edges[0].node.childImageSharp.fluid.src});`} >
            <SignWrap>
                <SignTitle>{isEnglish ? `Sign in via` : `Connectez-vous via`}</SignTitle>
                <BtnWrapper>
                    <Btn round='true' type='button' google onClick={() => signInWithGoogle(dispatch)}><GoogleIcon />Google</Btn>
                    <Btn round='true' type='button' facebook onClick={() => signInWithFB(dispatch)}><FacebookIcon />Facebook</Btn>
                </BtnWrapper>
            </SignWrap>
        </SignContainer >
    )
}

export default SignIn