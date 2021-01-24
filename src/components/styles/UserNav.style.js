import styled from 'styled-components'

export const UserNavContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    cursor: pointer;

    &:hover span {
            color: #f26a2e ;
        }
`

export const UserPhoto = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-right: 1.5rem;
    transform: scale(1.3);
`

export const UserName = styled.span`
    font-size: 14px;
`

