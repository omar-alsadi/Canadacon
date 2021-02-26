import React from "react"
import Layout from "./../components/Layout"
import { TemplateContainer, TemplateWrapper, SectionTitle, Desc }
    from '../components/styles/Template.style'
import CommentForm from '../components/CommentForm'
import { graphql } from 'gatsby';
import { pushEvent } from '../firebase.utilities'

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

    pushEvent(event);

    return (
        <Layout title={`${event.name}`} color={'white'} >
            <TemplateContainer css={`background: linear-gradient(180deg, rgba(0,0,0, .2) 0%, rgba(0,0,0, .6) 100%), linear-gradient(180deg, rgba(0,0,0, .2) 0%, transparent 100%),
            url(${event.img.publicURL}) no-repeat; background-size: cover;  background-position: center; background-attachment: fixed; margin-bottom: 2rem;`} />

            <TemplateWrapper>
                <SectionTitle>
                    {event.name}
                </SectionTitle>
                <Desc>Date: {event.date}</Desc>
                <Desc>Address: <span>address is not available now</span> </Desc>
                <Desc>Description: </Desc>
                <Desc>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros,
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus.
                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex,
                    in pretium orci vestibulum eget. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
                    vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.
                    Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiat
                    faucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.
                    Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis.
                    Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metus,
                    non dictum mauris. Nulla at tellus sagittis, viverra est a.</span>
                </Desc>

                <CommentForm event={event} />

            </TemplateWrapper>

        </Layout>
    )
}

export default eventTemplate