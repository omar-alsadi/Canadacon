import React from "react"
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { FaRegLightbulb } from 'react-icons/fa'
import { ColumnOne, ColumnTwo, ContentWrapper, Description, Testimonial, TopLine, TestimonialsContainer, Images } from "./styles/Testimonials.style"
import { useStaticQuery, graphql } from 'gatsby'
import { useStateValue } from './StateProvider'

const Testimonials = () => {

    const [{ isEnglish }] = useStateValue();

    const data = useStaticQuery(graphql`
        query ImageQuery {
            allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"},
            name: {in: ["testimonia-1","testimonia-2"]}}) {
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


    return (
        <TestimonialsContainer>
            <TopLine>{isEnglish ? `Testimonials` : `Témoignages`}</TopLine>
            <Description>{isEnglish ? `What People Are Saying` : `Ce Que Les Gens Disent`}</Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline css={`color: #3fffa8; font-size: 2rem;`} />
                        <h3>Sara Kim</h3>
                        <p>"Organized, Fun And Good Time.The greatest experiance of my Life .. Thank you all and I wish coming again and again!</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb css={`color: #f9b19b; font-size: 2rem;`} />
                        <h3>Jonny</h3>
                        <p>"OMG! It was awesome! I've never forgotten that feeling and fun moments. It was the best Comic con party ever!</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    {
                        data.allFile.edges.map((image, key) => (
                            <Images key={key} fluid={image.node.childImageSharp.fluid} />
                        ))
                    }
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials