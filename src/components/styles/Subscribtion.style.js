import styled from 'styled-components'

export const SubscribtionContainer = styled.div`
    height: 450px;
    width: 100%;
    padding: 5rem calc((100vw - 1300px) / 2);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubscribtionContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100%;

    h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-size: clamp(1rem, 5vw, 3rem);
        padding: 0 1rem;
    }

    p {
        text-align: center;
        margin-bottom: 2rem;
        font-size: clamp(1rem, 2.5vw, 1.5rem);
        padding: 0 1rem;
        line-height: 1.5;
    }

    form {
        z-index: 10;
    }
`

export const FormWrap = styled.div`

    min-width: 380px;

    input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 100%;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-bottom: 1rem;
        margin-right: 1rem;
        transition: .5s ease-in-out;
        
        &:hover, &:active {
            transform: translateY(-2px);
        }
    }


    @media screen and (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        
        input {
            width: 100%;
            margin-bottom: 1rem;
            margin-right: 0;
        }
    }
    @media screen and (max-width: 400px) {
        min-width: 250px;

        input {
        padding: 1rem 1.5rem;
        outline: none;
        width: 100%;
        height: 48px;
        border-radius: 50px;
        border: none;
        margin-right: 1rem;
        transition: .5s ease-in-out;
        
        &:hover {
            width: 100%;
            transform: translateY(-2px);
        }
    }
    }


`
export const SubmitBtn = styled.button`

    background: #db4a39;
    background: ${({ primary, google, facebook }) => ([primary && "#F26A2E", google && "#db4a39", facebook && "#3b5998"])};    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')} ;
    height: 48px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border: none;
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

    @media screen and (max-width: 768px) {
     min-width: 350px;
 }

 @media screen and (max-width: 400px) {
    min-width: 250px;
}
`