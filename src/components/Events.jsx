import React, { useEffect, useRef } from "react"
import { graphql, useStaticQuery } from 'gatsby'
import { EventContainer, EventWrapper, EventHeading, EventImg, EventInfo, TextWrap, EventTitle, EventCard, SeeMore } from './styles/Events.style'
import { ImLocation } from 'react-icons/im'
import { Button } from "./styles/Button"
import { useStateValue } from './StateProvider'
import sr from '../sr';
import { srConfig } from '../config';

const Events = () => {

  const revealContainer = useRef(null);

  useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

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
              fields {
                slug
              }
            }
          }
        }
      }
      
    `)

  const getEvents = data => {

    const eventsArray = [];

    data.allEventsDataJson.edges.slice(0, 4).map(({ node }, index) => {
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
    <>
      <EventContainer ref={revealContainer} >
        <EventHeading>{isEnglish ? `Join Us` : `Rejoignez-nous`}</EventHeading>
        <EventWrapper>{getEvents(data)}</EventWrapper>
        <SeeMore to='/events'>See All Events &#8594;</SeeMore>
      </EventContainer>
    </>
  )
}

export default Events