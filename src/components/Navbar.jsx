import React, { useEffect } from "react"
import UserNav from './UserNav.component'
import { Nav, NavLink, Bars, CloseBars, NavMenu, NavBtn, NavLogo, LanBtn } from './styles/Navbar.style'
import { Button } from './styles/Button'
import { menuData } from './../data/NavData'
import { useStateValue } from './StateProvider'
import { setStorage } from './../Reducer'
import { toggleNav, toggleEn, isScrollingTop, isScrollingBack, toggleUserMenu } from './../actions'

const NavBar = ({ color }) => {

    const [{ isOpen, isEnglish, currentUser, navScrolled }, dispatch] = useStateValue();

    const hundleClick = () => {
        dispatch(toggleEn());
        return isEnglish;
    }

    setStorage(isEnglish, navScrolled, currentUser);

    const changeBackground = () => {
        let scroll = window.scrollY;

        if (scroll < 120) {
            return dispatch(isScrollingTop())
        } else if (scroll > 120) {
            return dispatch(isScrollingBack())
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBackground);
    }, [])

    return (

        <Nav css={[navScrolled && !isOpen && ` background-color: black`,
        isOpen && `background-color: rgba(0,0,0,.95) !important; height: 100%`]}>
            <NavLogo to='/' css={`color: #f26a2e; font-size: 24px; font-weight: bold;`}>CANADACON</NavLogo>
            {
                isOpen ? <CloseBars onClick={() => dispatch(toggleNav())} /> : <Bars onClick={() => dispatch(toggleNav())}
                    css={navScrolled ? `color: #fff;` : `color: ${color};`} />
            }

            <NavMenu css={isOpen && `height: 100vh;padding: 5rem;`}>
                {menuData.map((list, index) => (
                    <NavLink key={index} id={index} to={list.link} css={[isOpen && `visibility: visible;`,
                    navScrolled ? `color: #fff;` : `color: ${color};`]}>
                        {isEnglish ? list.en : list.fr}
                    </NavLink>
                ))}
                <LanBtn onClick={() => hundleClick()} type='button' css={
                    [isOpen && `visibility: visible;`,
                    navScrolled ? `color: #fff;` : `color: ${color};`,

                    `@media screen and (max-width:768px) {
                    color: #fff !important;
                    ${isOpen ? `visibility: visible;` : `visibility: hidden;`}
                }`
                    ]} >
                    {
                        isEnglish ? 'FR' : 'EN'
                    }
                </LanBtn>
                {
                    isOpen && <Button primary='true' round='true' to='/sign' css={isOpen && `visibility: visible;`} >
                        {isEnglish ? `Sign In` : `Se Connecter`}
                    </Button>

                }
            </NavMenu>
            <NavBtn>
                {currentUser ?
                    <div onClick={() => dispatch(toggleUserMenu())}>
                        <UserNav currentUser={currentUser} navScrolled={navScrolled}
                            color={color} />
                    </div>
                    :
                    <Button primary='true' round='true' to='/sign'>
                        {isEnglish ? `Sign In` : `Se Connecter`}
                    </Button>
                }
            </NavBtn>
        </Nav>

    )
}

export default NavBar