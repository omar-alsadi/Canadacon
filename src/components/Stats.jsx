import React from 'react'
import { StatsContainer, Heading, Wrapper, StatBox, Icon, Title, Description } from './styles/Stats.style'
import { StatsData } from '../data/StatsData'
import { useStateValue } from './StateProvider'

const Stats = () => {

    const [{ isEnglish }] = useStateValue();

    return (
        <StatsContainer>
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
