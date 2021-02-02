import React from "react"
import Layout from "./../components/Layout"
import { SectionContainer, SectionWrapper, SectionTitle, SectionText }
    from '../components/styles/Section.style'
import { graphql } from 'gatsby';

export const query = graphql`
    query ($slug: String!) {
        eventsDataJson(fields: {slug: {eq: $slug }}) {
            alt
            buttonEn
            buttonFr
            date
            id
            name
            img {
              name
              publicURL
            }
        }
    }
  
`

const eventTemplate = ({ data }) => {

    const event = data.eventsDataJson;

    return (
        <Layout title={`${event.name}`} color={'black'} >
        </Layout>
    )
}

export default eventTemplate