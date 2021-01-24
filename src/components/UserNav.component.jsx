import React from "react"
import { useStateValue } from './StateProvider'
import UserNavMenu from './UserNavMenu'
import { UserNavContainer, UserName, UserPhoto } from './styles/UserNav.style'

const UserNav = ({ currentUser, color, navScrolled }) => {

    const [{ userMenu }] = useStateValue()
    return (
        <UserNavContainer>
            <UserPhoto src={currentUser.photoURL} />
            <UserName css={navScrolled ? `color: #fff;` : `color: ${color};`} >{currentUser.displayName}</UserName>
            { userMenu && <UserNavMenu />}
        </UserNavContainer>
    )
}

export default UserNav