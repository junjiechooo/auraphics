import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles'; 
import Logo from '../../images/Auraphics.png';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    // NavIcon, 
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    // NavBtnLink
} from './Navbar.elements';


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false) 
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick= { closeMobileMenu } >
                        <img src={Logo} alt="Auraphics Logo" width="84rem" height="84rem" style={{ marginTop: "20px", marginRight: "10px" }}/>
                        Auraphics
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/about'>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/services'>
                               Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/reviews'>
                               Reviews
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/clients'>
                                Clients
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            <a target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSeyeHsv--ediYSrUSemUsvzPc_zeOmZTNVQFsl54t12DIBn7Q/viewform">
                                <Button primary>Enquire Us</Button>
                            </a>
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
