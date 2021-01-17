import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? "#F26A2E" : "#E44A28")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')} ;
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s !important;
    border-radius: ${({ round }) => (round ? "50px" : 'none')} ;

    &:hover {
        background: ${({ primary }) => (primary ? "#E44A28" : "#F26A2E")};
        box-shadow: .5rem .5rem 2rem black;
        transform: translateY(-2px);
    }
`