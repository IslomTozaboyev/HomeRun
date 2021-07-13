import React, { Component } from 'react';
import "./Header.css";
import logo from "../../img/logo.png"
import { Button } from 'reactstrap';
import { Fade } from "react-awesome-reveal";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


export default class Header extends Component {
    
    state = { a: false }
        showNav = () => {
        this.setState((state) => {
            return {a: !state.a}
        })
}   

    render() {
        return (
            <Fade>
            <header className="px-5 py-2">
              <div className="container-fluid my-2">
                   <div className="d-flex justify-content-between align-items-center">
                        <div>
                        <img src={logo} alt="rasm" />
                        </div>
                       
                        
                        <div className={`nav__menu ${this.state.a && "nav__start" || ""}`}>
                            <a href="#">Product</a>
                            <a href="#">Templates
                                <span className="badge bg-danger rounded ms-1">new</span>
                            </a>
                            <a href="#">Pricing</a>
                            <a href="#">Customers</a>
                                <a href="#">Learn</a>                            
                                <Button className="times" onClick={this.showNav} color="success">
                                    <FontAwesomeIcon icon={faTimes}/>
                                </Button>

                            </div>
                       
                     
                       
                        <div className="nav__btn d-flex">
                        <Button className="d-none d-lg-flex" color="light">Log in</Button>
                                <Button className="button d-none d-lg-flex" color="primary">Start free trial</Button>
                                
                                <Button className="bars ms-3" onClick={this.showNav}>
                                    <FontAwesomeIcon icon={faBars}/>
                                </Button>
                        </div>
                   </div>
              </div>
            </header>
            </Fade>
        )
    }
}
