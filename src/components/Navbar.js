import React from "react"
import { Nav, NavLink, Bars, NavMenu, NavBtn } from './styles/Navbar.style'
import { Button } from './styles/Button'
import { menuData } from './../data/NavData'

const NavBar = () => (

    <Nav>
        <NavLink>Canadacon</NavLink>
        <Bars />
        <NavMenu>
            {menuData.map((list, index) => (
                <NavLink id={index} to={list.link}>{list.title}</NavLink>
            ))}
        </NavMenu>
        <NavBtn>
            <Button primary round to='/tickets' >Book Now</Button>
        </NavBtn>
    </Nav>

)

export default NavBar