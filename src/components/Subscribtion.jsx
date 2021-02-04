import React, { useEffect, useRef } from "react"
import emailjs from "emailjs-com";
import { SubscribtionContainer, SubscribtionContent, FormWrap, SubmitBtn } from './styles/Subscribtion.style';
import { useStaticQuery, graphql } from 'gatsby';
import { useStateValue } from './StateProvider';
import sr from '../sr';
import { srConfig } from '../config';

const Subscribtion = () => {

    const revealContainer = useRef(null);

    useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dzy0vhr",
                "template_l1jozu5",
                e.target,
                "user_55YQUmxkaURTWt5INGzP6"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    }

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
        <SubscribtionContainer ref={revealContainer} css={`background: linear-gradient(180deg, rgba(0,0,0,.5) 0%,
        rgba(0,0,0,.5) 35%,rgba(0,0,0,.1) 100%),
         url(${subWallpaper.allFile.edges[0].node.childImageSharp.fluid.src}) no-repeat bottom;background-size: cover;`}>
            <SubscribtionContent>
                <h1>{isEnglish ? `Get Access to Exclusive Offers` : `Accédez à des offres exclusives`}</h1>
                <p>{isEnglish ? `Sign up for newsletter below to get %20 off your first ticket!` :
                    `Inscrivez-vous à la newsletter ci-dessous pour obtenir 20% de réduction sur votre premier billet!`}</p>
                <form onSubmit={sendEmail}>
                    <FormWrap>
                        <label htmlFor='email'>
                            <input type='email' placeholder={isEnglish ? `Enter your email` : `Entrer votre é-courrier`} id="email" autoComplete='off' />
                        </label>
                        <SubmitBtn primary='true' round='true' type='submit'>{isEnglish ? `Subscription` : `Abonnement`}</SubmitBtn>
                    </FormWrap>
                </form>
            </SubscribtionContent>
        </SubscribtionContainer>
    )
}

export default Subscribtion