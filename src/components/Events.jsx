import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { EventContainer, EventWrapper, EventHeading, EventImg, EventInfo, TextWrap, EventTitle, EventCard } from './styles/Events.style'
import { ImLocation } from 'react-icons/im'
import { Button } from "./styles/Button"
import { useStateValue } from './StateProvider'


const Events = () => {

    const [{ isEnglish }] = useStateValue();

    const data = useStaticQuery(graphql`
        query EventsQuery {
            allEventsDataJson {
            edges {
                node {
                id
                alt
                buttonEn
                buttonFr
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

        data.allEventsDataJson.edges.slice(0, 4).map((edge, index) => {
            eventsArray.push(

                <EventCard key={index}>
                    <EventImg src={edge.node.img.childImageSharp.fluid.src} alt={edge.node.alt} fluid={edge.node.img.childImageSharp.fluid} />
                    <EventInfo>
                        <TextWrap>
                            <ImLocation />
                            <EventTitle>{edge.node.name}</EventTitle>
                        </TextWrap>
                        <Button primary='true' round='true' to='/tickets' css={`position: absolute; top: 420px;`}> {isEnglish ? edge.node.buttonEn : edge.node.buttonFr}</Button>
                    </EventInfo>
                </EventCard>
            )
        });

        return eventsArray

    }


    return (
        <>
            <EventContainer >
                <EventHeading>{isEnglish ? `Join Us` : `Rejoignez-nous`}</EventHeading>
                <EventWrapper>{getEvents(data)}</EventWrapper>
            </EventContainer>
        </>
    )
}

export default Events