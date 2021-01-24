import React from "react"
import { useStateValue } from './StateProvider'

import { UserNavMenuWrapper, UserNavList, UserNavBtn } from './styles/UserNavMenu.style'
import { signOut } from './../firebase.utilities'
import { toggleUserMenu } from "../actions"

const UserNavMenu = () => {

    const [state, dispatch] = useStateValue()
    return (
        <>
            <UserNavMenuWrapper>
                <UserNavList onClick={() => dispatch(toggleUserMenu())} to='/user_profile'>User Profile</UserNavList>
                <UserNavList onClick={() => dispatch(toggleUserMenu())} to='my-tickets'>My Tickets</UserNavList>
                <UserNavBtn type='button' onClick={() => dispatch(signOut(dispatch))}>Sign Out</UserNavBtn>
            </UserNavMenuWrapper>
        </>
    )
}

export default UserNavMenu