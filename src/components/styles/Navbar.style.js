import { FaBars } from 'react-icons/fa'
import { VscChromeClose } from 'react-icons/vsc'
import styled, { keyframes } from 'styled-components'
import { Link } from "gatsby"

const FadeOut = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        font-size: 12px;
    }

    &:hover {
        color: #f26a2e;
    }
`

export const NavLogo = styled(Link)`
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    padding: 0 1rem;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        position: fixed;
    }
`

export const Nav = styled.nav`
    padding: 1.5rem calc((100vw - 1300px) / 2 );
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    z-index: 100;
    transition: all .1s ease;

    @media screen and (max-width: 768px) {
        height: 70px;
        align-items: start;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,75%);
        font-size: 1.8rem;
        cursor: pointer;
        animation: ${FadeOut} .5s ease;
        transition: animation .5s ease;
    }
`
export const CloseBars = styled(VscChromeClose)`
    display: none;
    color: #fff;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,75%);
        font-size: 1.8rem;
        cursor: pointer;
        animation: ${FadeOut} .5s ease;
        transition: animation .5s ease;
    }
`

export const NavMenu = styled.div`

    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        visibility: hidden;
        width: 100%;
    }
`

export const NavBtn = styled.div`

    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`