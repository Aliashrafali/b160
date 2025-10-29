import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Section = styled.section``;

const Menu = () =>{
    return(
        <>
            <Section>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 m-0 p-0">
                            <div className="menu">
                                <nav>
                                    <ul>
                                        <li><NavLink to={'/'} className={'nav'}>Home</NavLink></li>
                                        <li><NavLink to={'/About'} className={'nav'}>About Us</NavLink></li>
                                        <li><NavLink to={'/'} className={'nav'}>Gallery</NavLink></li>
                                        <li><NavLink to={'/'} className={'nav'}>Admission</NavLink></li>
                                        <li><NavLink to={'/'} className={'nav'}>Registration</NavLink></li>
                                        <li><NavLink to={'/'} className={'nav'}>Contact Us</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    )
}

export default Menu