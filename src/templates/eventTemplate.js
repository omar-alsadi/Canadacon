import React from "react"
import Layout from "./../components/Layout"
import { SectionContainer, SectionWrapper, SectionTitle, SectionText }
    from '../components/styles/Section.style'
import { graphql } from 'gatsby';

export const query = graphql`
    query ($slug: String!) {
        allEventsDataJson(filter: {fields: {slug: {eq: $slug }}}) {
        edges {
            node {
            alt
            buttonEn
            buttonFr
            date
            id
            name
            fields {
                slug
            }
            img {
                name
                publicURL
            }
            }
        }
        }
    }
  
`

const eventTemplate = (props) => {

    return (
        <Layout title={'event'} color={'black'} >
            {props}
        </Layout>
    )
}

export default eventTemplate