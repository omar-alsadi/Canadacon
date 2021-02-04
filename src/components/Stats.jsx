import React, { useEffect, useRef } from 'react'
import { StatsContainer, Heading, Wrapper, StatBox, Icon, Title, Description } from './styles/Stats.style'
import { StatsData } from '../data/StatsData'
import { useStateValue } from './StateProvider'
import sr from '../sr';
import { srConfig } from '../config';

const Stats = () => {

    const revealContainer = useRef(null);

    useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

    const [{ isEnglish }] = useStateValue();

    return (
        <StatsContainer ref={revealContainer}>
            <Heading>{isEnglish ? `Why Choose Us?` : `Pourquoi Nous Choisir?`}</Heading>
            <Wrapper>
                {StatsData.map((item, index) => (
                    <StatBox key={index} >
                        <Icon>{item.icon}</Icon>
                        <Title>{isEnglish ? item.titleEn : item.titleFr}</Title>
                        <Description>{isEnglish ? item.desc : item.descFr}</Description>
                    </StatBox>
                ))}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats
