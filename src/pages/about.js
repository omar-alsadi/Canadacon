import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import { useStateValue } from '../components/StateProvider'

import Layout from "../components/Layout"
import { SectionContainer, SectionText, SectionTitle, SectionImg, SectionWrapper, TwoColumns, OneColumn } from "../components/styles/Section.style"
import { Button } from "../components/styles/Button"


const AboutPage = () => {

    const [{ isEnglish }] = useStateValue();

    const Img = useStaticQuery(graphql`
    query MyQuery {
          
        allFile(filter: {name: {in: "anime-expo-selfie"}}) {
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

    console.log(Img.allFile.edges[0].node.childImageSharp.fluid);

    return (
        <Layout title={'About'} color={'black'}>
            <SectionContainer>
                <SectionTitle>{isEnglish ? `About Us` : `À Propos de Nous`}</SectionTitle>
                <SectionWrapper>
                    <TwoColumns>
                        {isEnglish ?
                            <>
                                <SectionText>
                                    We are Otaku !! YES LIKE YOU ! So, We take care
                                    about everything which Otakus do. We cover animes, managas, characters cosplays
                            and more! Even we cover the Comic events in North America <span>( Canada & US )</span>.
                        </SectionText>
                                <SectionText>
                                    To know more see Events now
                            <Button to='/events' primary='true' round='true' css={` width: 150px; margin-top: 2rem;`}>
                                        See Our Events
                            </Button>
                                </SectionText>
                            </>
                            :
                            <>
                                <SectionText>
                                    Nous sommes Otaku !! OUI COMME TOI ! Donc, nous nous occupons de tout ce que fait Otakus. Nous couvrons les animes,
                                    les managas, les cosplays de personnages et plus encore! Même nous couvrons les événements BD en Amérique du Nord.
                        <span>( Canada et US )</span>.
                    </SectionText>
                                <SectionText>
                                    Pour en savoir plus, voir les événements maintenant
                        <Button to='/events' primary='true' round='true' css={` width: 180px; margin-top: 2rem;`}>
                                        Voir nos événements
                        </Button>
                                </SectionText>
                            </>
                        }
                    </TwoColumns>
                    <OneColumn>
                        <SectionImg src={Img.allFile.edges[0].node.childImageSharp.fluid.src} />
                    </OneColumn>
                </SectionWrapper>
            </SectionContainer>
        </Layout>
    )

}

export default AboutPage
