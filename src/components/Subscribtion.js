import React from "react"
import { Button } from "./styles/Button"
import { SubscribtionContainer, SubscribtionContent, FormWrap } from './styles/Subscribtion.style'

const Subscribtion = () => {

    return (
        <SubscribtionContainer>
            <SubscribtionContent>
                <h1>Get Access to Exclusive Offers</h1>
                <p>Sign up for newsletter below to get %20 off your first ticket!</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor='email'>
                            <input type='email' placeholder="Enter your email" id="email" autoComplete='off' />
                        </label>
                        <Button primary='true' round='true' type='submit' css={
                            `height: 48px;
                             @media screen and (max-width: 768px) {
                                 width: 100%;
                                 min-width: 350px;
                             }

                             @media screen and (max-width: 400px) {
                                width: 100%;
                                min-width: 250px;
                            }

                            `
                        }>Subscribtion</Button>
                    </FormWrap>
                </form>
            </SubscribtionContent>
        </SubscribtionContainer>
    )
}

export default Subscribtion