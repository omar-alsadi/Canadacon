import React from 'react'
import { StatsContainer, Heading, Wrapper, StatBox, Icon, Title, Description } from './styles/Stats.style'
import { StatsData } from './../data/StatsData'

const Stats = () => {

    return (
        <StatsContainer>
            <Heading>Why Choose Us?</Heading>
            <Wrapper>
                {StatsData.map((item, index) => (
                    <StatBox id={index}>
                        <Icon>{item.icon}</Icon>
                        <Title>{item.title}</Title>
                        <Description>{item.desc}</Description>
                    </StatBox>
                ))}
            </Wrapper>
        </StatsContainer>
    )
}

export default Stats
