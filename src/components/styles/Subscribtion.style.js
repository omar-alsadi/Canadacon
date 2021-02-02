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
