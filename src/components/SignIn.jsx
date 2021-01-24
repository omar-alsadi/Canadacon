import React, { useEffect } from "react"
import { SignContainer, SignWrap, SignTitle, BtnWrapper, FacebookIcon, GoogleIcon, Btn } from './styles/SignIn.style'
import { useStateValue } from './StateProvider'
import { setStorage } from '../Reducer'
import { signInWithFB, signInWithGoogle } from '../firebase.utilities'

const SignIn = () => {

    const [{ isEnglish, currentUser, navScrolled, isUserSigned }, dispatch] = useStateValue();

    setStorage(currentUser, isEnglish, navScrolled, isUserSigned)

    useEffect(() => {
        console.log('user: ', currentUser);
    })

    return (
        <SignContainer>
            <SignWrap>
                <SignTitle>{isEnglish ? `Sign in via` : `Connectez-vous via`}</SignTitle>
                <BtnWrapper>
                    <Btn round='true' google onClick={() => signInWithGoogle(dispatch)}><GoogleIcon />Google</Btn>
                    <Btn round='true' facebook onClick={() => signInWithFB(dispatch)}><FacebookIcon />Facebook</Btn>
                </BtnWrapper>
            </SignWrap>
        </SignContainer>
    )
}

export default SignIn