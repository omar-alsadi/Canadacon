import React from "react"
import { FooterContainer, FooterDesc, FooterLink, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle } from "./styles/Footer.style"
import { useStateValue } from './StateProvider'

const Footer = () => {

    const [{ isEnglish }] = useStateValue();

    return (
        <FooterContainer>
            <FooterLinksWrapper>
                <FooterDesc>
                    <h1>Canadacon</h1>
                    <p>{isEnglish ? `We strive to make the best experiances for our customers` :
                        `Nous nous efforçons de faire les meilleures expériences pour nos clients`}</p>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to=''>Contact</FooterLink>
                    <FooterLink to=''>Support</FooterLink>
                    <FooterLink to=''>Events</FooterLink>
                    <FooterLink to=''>Sponsorships</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Studio</FooterLinkTitle>
                    <FooterLink to=''>Videos</FooterLink>
                    <FooterLink to=''>Gallery</FooterLink>
                    <FooterLink to=''>Coordinators</FooterLink>
                    <FooterLink to=''>Influncer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>Social Media</FooterLinkTitle>
                    <FooterLink to=''>Instagram</FooterLink>
                    <FooterLink to=''>Facebook</FooterLink>
                    <FooterLink to=''>Youtube</FooterLink>
                    <FooterLink to=''>Twitter</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterContainer>
    )
}

export default Footer