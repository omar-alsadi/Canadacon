import styled, { keyframes } from 'styled-components'
import { Link } from 'gatsby'

export const slowDown = keyframes`
    0% { opacity: 0; top: 0rem },
    80% { opacity:.2},
    100% { opacity: 1; top: 3rem }

`

export const UserNavMenuWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    background-color: white;
    box-shadow: 1px 10px 5rem rgba(0,0,0,0.2);
    border-radius: 10px;
    position: absolute;
    overflow: hidden;
    width: 150px;
    top: 3rem;
    right: 0rem;
    font-size: 14px;
    z-index: 1;
    animation: ${slowDown} .3s ease-in-out;
    transition: all .3s ease-in-out;
`

export const UserNavList = styled(Link)`
    width: 100%;
    color: black;
    font-weight: 400;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;

    &:nth(last-child) {
        border-bottom: 1px solid lightgray;
    }

    &:hover {
        background-color: #f4f2f2
    }

`

export const UserNavBtn = styled.button`
    font-size: 14px;
    width: 100%;
    background-color: #fff;
    color: black;
    padding: 1rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    border: none;

    &:hover {
        background-color: #f4f2f2
    }

`
