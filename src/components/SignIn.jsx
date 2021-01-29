import React, { useEffect } from "react"
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

    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: "450709229631147",
                cookie: true,
                xfbml: true,
                version: "v9.0",
            });
        }.bind(this);

        // Load the SDK asynchronously --- DOESNT WORK WITH FIREFOX : https://bugzilla.mozilla.org/show_bug.cgi?id=1226498
        (function (d, s, id) {
            let js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        })(document, "script", "facebook-jssdk");
    }, []);

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
        </SignContainer>
    )
}

export default SignIn