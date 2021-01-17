import React from "react"
import { Button } from "./styles/Button"
import { HeroBg, HeroContainer, HeroContent, HeroItems, HeroP, HeroTitle, VideoBg } from "./styles/Hero.style"
import Video from "./../assets/videos/Hero.mp4"


const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type='video/mp4' autoPlay muted loop playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroTitle>
                        Hello Otako!
                    </HeroTitle>
                    <HeroP>Let's Celebrate Together</HeroP>
                    <Button primary big round to='/tickets' >Join Us</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero