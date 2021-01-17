import styled from 'styled-components'
import Img from 'gatsby-image'

export const EventContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
`

export const EventHeading = styled.div`
    font-size: clamp(1.2rem, 5vw,3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
    text-transform: uppercase;
`

export const EventWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    justify-content: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 868px) {
        grid-template-columns: 1fr;
    }
`

export const EventCard = styled.div`
    width: 100%;
    height: 500px;
    position: relative;
    line-height: 2;
    border-radius: 10px;
    transition: .2s ease;
`


export const EventImg = styled(Img)`
    height: 100%;
    max-height: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: .4s cubic-bezier(0.075, 0.82, 0.165, 1) ;

    &:hover {
        filter: brightness(100%)
    }
`

export const EventInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width:285px) {
        padding: 0 1rem;
    }
`

export const EventTitle = styled.div`
    font-weight: bold;
    font-size: 1rem;
    margin-left: .5rem;
`

export const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 375px;
`
