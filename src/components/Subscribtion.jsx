import React from "react"
import { Button } from "./styles/Button"
import { SubscribtionContainer, SubscribtionContent, FormWrap } from './styles/Subscribtion.style';
import { useStaticQuery, graphql } from 'gatsby';
import { useStateValue } from './StateProvider';

const Subscribtion = () => {

    const subWallpaper = useStaticQuery(graphql`
            query subWallpaperQuery {
                allFile(filter: {name: {in: "subscribtion"}}) {
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

    const [{ isEnglish }] = useStateValue();

    return (
        <SubscribtionContainer css={`background: linear-gradient(180deg, rgba(0,0,0,.5) 0%,
        rgba(0,0,0,.5) 35%,rgba(0,0,0,.1) 100%),
         url(${subWallpaper.allFile.edges[0].node.childImageSharp.fluid.src}) no-repeat bottom;background-size: cover;`}>
            <SubscribtionContent>
                <h1>{isEnglish ? `Get Access to Exclusive Offers` : `Accédez à des offres exclusives`}</h1>
                <p>{isEnglish ? `Sign up for newsletter below to get %20 off your first ticket!` :
                    `Inscrivez-vous à la newsletter ci-dessous pour obtenir 20% de réduction sur votre premier billet!`}</p>
                <form action="#">
                    <FormWrap>
                        <label htmlFor='email'>
                            <input type='email' placeholder={isEnglish ? `Enter your email` : `Entrer votre é-courrier`} id="email" autoComplete='off' />
                        </label>
                        <Button to='/' primary='true' round='true' type='submit' css={
                            `height: 48px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                             @media screen and (max-width: 768px) {
                                 width: 100%;
                                 min-width: 350px;
                             }

                             @media screen and (max-width: 400px) {
                                width: 100%;
                                min-width: 250px;
                            }

                            `
                        }>{isEnglish ? `Subscription` : `Abonnement`}</Button>
                    </FormWrap>
                </form>
            </SubscribtionContent>
        </SubscribtionContainer>
    )
}

export default Subscribtion