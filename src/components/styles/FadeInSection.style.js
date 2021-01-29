import styled from 'styled-components'

export const Fade = styled.div`
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 1200ms ease-out, transform 600ms ease-out,
    visibility 1200ms ease-out;
    will-change: opacity, transform, visibility;
`
