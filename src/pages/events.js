import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/Layout"
import { EventCard, EventContainer, EventImg, EventInfo, EventTitle, EventWrapper, TextWrap } from "../components/styles/Events.style"
import { ImLocation } from "react-icons/im"
import { Button } from "../components/styles/Button"
import { useStateValue } from "../components/StateProvider"

export const data = graphql`
    query AllEventsQuery {
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
              fields {
                slug
              }
            }
          }
        }
      }`


const EventsPage = ({ data }) => {

    const [{ isEnglish }] = useStateValue();

    const getEvents = data => {

        const eventsArray = [];

        data.allEventsDataJson.edges.map(({ node }, index) => {
            eventsArray.push(

                <EventCard key={index}>
                    <EventImg src={node.img.childImageSharp.fluid.src} alt={node.alt} fluid={node.img.childImageSharp.fluid} />
                    <EventInfo>
                        <TextWrap>
                            <ImLocation />
                            <EventTitle>{node.name}</EventTitle>
                        </TextWrap>
                        <Button primary='true' round='true' to={`/events/${node.fields.slug}`} css={`position: absolute; top: 420px;`}> {isEnglish ? node.buttonEn : node.buttonFr}</Button>
                    </EventInfo>
                </EventCard>
            )
        });

        return eventsArray

    }


    return (
        <Layout title={'Events'} color={'black'}>
            <EventContainer >
                <EventWrapper>{getEvents(data)}</EventWrapper>
            </EventContainer>
        </Layout>
    )
}

export default EventsPage
