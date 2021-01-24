import styled from 'styled-components'
import { Link } from "gatsby"

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb ;
    padding: 3rem calc((100vw - 1100px) / 2);

    @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    }
`

export const FooterDesc = styled.div`
    padding: 0 2rem;

    h1 {
        text-transform: uppercase;
        margin-bottom: 3rem;
        color: #f26a2e;
    }

    @media screen and (max-width: 400px) {
        padding: 1rem;
    }

`

export const FooterLinksWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);

   @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
   }

   @media screen and (max-width: 400px) {
    text-align: center;
   }

`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 2rem;

    @media screen and (max-width: 400px) {
        padding: 1rem;
        align-items: center;
    }
`

export const FooterLinkTitle = styled.h2`
    font-size: 14px;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    text-decoration: none;
    margin-bottom:.5rem;
    font-size: 14px;
    color: #3d3d4e;

    &:hover {
        color: #f26a2e;
        transition: .3s ease-out;
    }
`
