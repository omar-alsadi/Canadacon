import React, { useEffect } from "react"
import { Nav, NavLink, Bars, CloseBars, NavMenu, NavBtn, NavLogo } from './styles/Navbar.style'
import { Button } from './styles/Button'
import { menuData } from './../data/NavData'
import { useStateValue } from './StateProvider'
import { setStorage } from './../Reducer'
import { toggleNav, toggleEn, isScrollingTop, isScrollingBack } from './../actions'

const NavBar = ({ color }) => {

    const [{ isOpen, isEnglish, currentUser, navScrolled }, dispatch] = useStateValue();

    const hundleClick = () => {
        dispatch(toggleEn());
        console.log(currentUser);
        return isEnglish;
    }

    setStorage(currentUser, isEnglish, navScrolled);

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
                isOpen ? <CloseBars onClick={() => dispatch(toggleNav())} /> : <Bars onClick={() => dispatch(toggleNav())} />
            }

            <NavMenu css={isOpen && `height: 100vh;padding: 5rem;`}>
                {menuData.map((list, index) => (
                    <NavLink id={index} to={list.link} css={isOpen ? `visibility: visible; color: ${color};` : `color: ${color};`}>
                        {isEnglish ? list.en : list.fr}
                    </NavLink>
                ))}
                <button onClick={() => hundleClick()} type='button' css={`
                color: ${color};
                background: none;
                outline: none;
                text-transform: uppercase;
                border: none;
                font-size: 14px;
                font-weight: bold;
                padding: 0 1rem;
                height: 100%;
                cursor: pointer;

                &:hover {
                    color: #f26a2e;
                }
                @media screen and (max-width:768px) {
                    ${isOpen ? `visibility: visible;` : `visibility: hidden;`}
                }
                `} >
                    {
                        isEnglish ? 'FR' : 'EN'
                    }
                </button>
                {
                    isOpen && <Button primary='true' round='true' to='/tickets' css={isOpen && `visibility: visible;`} >
                        {isEnglish ? `Sign In` : `Se Connecter`}
                    </Button>

                }
            </NavMenu>
            <NavBtn>
                {currentUser ?
                    <Button primary='true' round='true' to='/sign' >
                        {isEnglish ? `Sign Out` : `Déconnexion`}
                    </Button> :
                    <Button primary='true' round='true' to='/sign'>
                        {isEnglish ? `Sign In` : `Se Connecter`}
                    </Button>
                }
            </NavBtn>
        </Nav>

    )
}

export default NavBar