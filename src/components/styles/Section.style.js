import styled from 'styled-components'
import Img from 'gatsby-image'

export const SectionContainer = styled.div`
    padding: 7rem calc((100vw - 1300px) / 2);
    height: 100%;
    width: 100%;
`

export const SectionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width:768px) {
        grid-template-columns: 1fr;
    }
`
export const OneColumn = styled.div`
    display: grid;
    grid-template-rows: 1fr;
`

export const TwoColumns = styled.div`
    display: grid;
    padding: 0 2rem;
    grid-template-rows: 1fr 1fr;
`

export const SectionTitle = styled.h2`
    font-size: clamp(1.5rem, 5vw, 2rem);
    text-align: center;
    color: #f26a2e;
    margin-bottom: 2rem;
`

export const SectionText = styled.p`
    font-size: clamp(1rem, 5vw, 1.2rem);
    text-decoration: uppercase;
    line-height: 1.5;

    & span {
        font-size: 12px;
    }
`

export const SectionImg = styled.img`
    max-width: 100%;
    border-radius: 10px;
    box-shadow: .6rem .6rem 0 #f26a2e;
`