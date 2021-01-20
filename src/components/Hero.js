import React from "react"
import { Button } from "./styles/Button"
import { HeroBg, HeroContainer, HeroContent, HeroItems, HeroP, HeroTitle, VideoBg } from "./styles/Hero.style"
import Video from "./../assets/videos/Hero.mp4"
import { useStateValue } from './StateProvider'


const Hero = () => {

    const [{ isEnglish }] = useStateValue();

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type='video/mp4' autoPlay muted loop playsInline />
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroTitle>
                        {
                            isEnglish ? `Hello Otako!` : `Bonjour Otaku!`
                        }
                    </HeroTitle>
                    <HeroP>
                        {
                            isEnglish ?
                                `Let's Celebrate Together` :
                                `Célébrons ensemble`
                        }
                    </HeroP>
                    <Button primary='true' big='true' round='true' to='/tickets'>{isEnglish ? `Join Us` : `Rejoignez-nous`}</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero