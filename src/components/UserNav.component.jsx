import React from "react"
import { UserNavContainer, UserName, UserPhoto } from './styles/UserNav.style'

const UserNav = ({ currentUser, color, navScrolled }) => {

    return (
        <UserNavContainer>
            <UserPhoto src={currentUser.photoURL} />
            <UserName css={navScrolled ? `color: #fff;` : `color: ${color};`} >{currentUser.displayName}</UserName>
        </UserNavContainer>
    )
}

export default UserNav