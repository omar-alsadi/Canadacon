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
    text-align: center;
    font-size: 14px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    @media screen and (max-width: 900px) {
        font-size: 12px;
    }

    @media screen and (max-width: 780px) {
        color: #fff !important;
    }

    &:hover {
        color: #f26a2e !important;
    }
`

export const NavLogo = styled(Link)`
    display: flex;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 14px;
    text-shadow: 1px 1px black;
    padding: 0 1rem;
    cursor: pointer;

    @media screen and (max-width: 780px) {
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
    transition: all .3s ease;

    @media screen and (max-width: 780px) {
        height: 70px;
        align-items: start;
    }
`

export const Bars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 780px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%,75%);
        font-size: 1.8rem;
        cursor: pointer;
        animation: ${FadeOut} .5s ease;
        transition: all .5s ease;
    }
`
export const CloseBars = styled(VscChromeClose)`
    display: none;
    color: #fff;

    @media screen and (max-width: 780px) {
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

    @media screen and (max-width: 780px) {
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
    position: relative;

    @media screen and (max-width: 780px) {
        display: none;
    }
`

export const LanBtn = styled.button`
    background: none;
    outline: none;
    text-transform: uppercase;
    border: none;
    font-size: 14px;
    font-weight: bold;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

        &:hover {
            color: #f26a2e !important;
        }
`
