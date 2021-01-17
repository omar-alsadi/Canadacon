import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { EventContainer, EventWrapper, EventHeading, EventImg, EventInfo, TextWrap, EventTitle, EventCard } from './styles/Events.style'
import { ImLocation } from 'react-icons/im'
import { Button } from "./styles/Button"


const Events = () => {

    const data = useStaticQuery(graphql`
        query EventsQuery {
            allEventsDataJson {
            edges {
                node {
                id
                alt
                button
                name
                img {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
            }
            }
        }
    `)

    const getEvents = data => {

        const eventsArray = [];

        data.allEventsDataJson.edges.map((edge, index) => {
            eventsArray.push(

                <EventCard id={index}>
                    <EventImg src={edge.node.img.childImageSharp.fluid.src} alt={edge.node.alt} fluid={edge.node.img.childImageSharp.fluid} />
                    <EventInfo>
                        <TextWrap>
                            <ImLocation />
                            <EventTitle>{edge.node.name}</EventTitle>
                        </TextWrap>
                        <Button primary round to='/tickets' css={`position: absolute; top: 420px;`}> {edge.node.button}</Button>
                    </EventInfo>
                </EventCard>
            )
        });

        return eventsArray

    }


    return (
        <>
            <EventContainer >
                <EventHeading>Join Us!</EventHeading>
                <EventWrapper>{getEvents(data)}</EventWrapper>
            </EventContainer>
        </>
    )
}

export default Events