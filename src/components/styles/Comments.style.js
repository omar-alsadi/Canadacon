import styled from 'styled-components'

export const InputText = styled.textarea`
    width: 60%;
    height: 100px;
    outline: none;
    border: 1px solid darkgray ;
    border-radius: 5px;
    padding: 1rem;
    margin-top: 2rem;

    @media screen and (max-width: 1000px) {
        width: 75%;
    }

    @media screen and (max-width: 680px) {
        width: 100%;
    }
`
export const CommentsWrapper = styled.div`
    padding: 2rem 0;
`

export const UserComment = styled.div`
    padding: 1rem 0;
`

export const User = styled.div`
    display: flex;
`

export const CommentDetails = styled.div`
    display: flex;
    flex-direction: column;
`

export const CommentDate = styled.div`
    font-size: 12px;
    color: darkgrey;
    margin-top: 5px;
`

export const Comment = styled.p`
    max-width: 60%;
    padding: 1rem;
`
