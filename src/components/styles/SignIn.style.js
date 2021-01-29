import styled from 'styled-components'
import { ImFacebook2, ImGoogle } from 'react-icons/im'


export const SignContainer = styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7rem calc((100vw - 1100px) / 2);
`

export const SignWrap = styled.div`
    text-align: center;
    width: 350px;
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,.9);
    justify-content: space-evenly;
    height: 350px;
    border: none;
    border-radius: 10px;
    box-shadow: 0.5rem 0.5rem 3rem rgba(0,0,0,.5);
    padding: 3rem;

    @media screen and (max-width:400px) {
        width: 250px;
        height: 250px;
    }
`

export const SignTitle = styled.h2`
    color: #f7a92c;
`

export const BtnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
`
export const Btn = styled.button`
    background: ${({ google, facebook }) => ([google && "#db4a39", facebook && "#3b5998"])};    white-space: nowrap;
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
        background: ${({ google, facebook }) => ([google && "#db4a39", facebook && "#3b5998"])}; white-space: nowrap;
        box-shadow: .2rem .2rem .8rem black;
        transform: translateY(-2px);
    }
`

export const GoogleIcon = styled(ImGoogle)`
    margin-right: 5px;
`

export const FacebookIcon = styled(ImFacebook2)`
    margin-right: 5px;
`