import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
    background: #db4a39;
    background: ${({ primary, google, facebook }) => ([primary && "#F26A2E", google && "#db4a39", facebook && "#3b5998"])};    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')} ;
    display: flex;
    justify-content: center;
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    text-decoration: none;
    transition: .3s !important;
    border-radius: ${({ round }) => (round ? "50px" : 'none')} ;

    &:hover {
        background: #F26A2E;
        background: ${({ primary, google, facebook }) => ([primary && "#E44A28", google && "#db4a39", facebook && "#3b5998"])}; white-space: nowrap;
        box-shadow: .2rem .2rem .8rem black;
        transform: translateY(-2px);
    }
`