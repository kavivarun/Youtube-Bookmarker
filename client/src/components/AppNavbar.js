import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faYoutube,faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPlay} from "@fortawesome/free-solid-svg-icons"

class AppNavbar extends Component{
    state = {
        isOpen : false
    }

    toggle = () =>{
        this.setState({
            isOpen : !this.state.isOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar  dark expand='sm' style={{backgroundColor:"#404040"}}>
                    <NavbarBrand href="/" className='ml-3'>
                        <span className="fa-layers fa-fw">
                            <FontAwesomeIcon icon={faYoutube} color="red" />
                            <FontAwesomeIcon icon={faPlay} inverse transform="shrink-12" />
                        </span>
                        Youtube-Bookmark
                    </NavbarBrand>
                    <NavbarToggler onClick = {this.toggle}/>
                    <Collapse isOpen = {this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar >
                                <NavLink href="https://github.com/kavivarun">
                                    <FontAwesomeIcon color="white" icon={faGithub}/> GitHub 
                                </NavLink>
                                <NavLink href="https://www.linkedin.com/in/kavi-varun-7399311aa/">
                                    <FontAwesomeIcon color="cyan" icon={faLinkedin}/> Linkedin 
                                </NavLink>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar