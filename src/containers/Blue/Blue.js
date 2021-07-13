import React, { Component } from 'react';
import "./Blue.css";
import blueBear from "../../img/blueBear.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'reactstrap';

class BlueCard extends Component{
    render() {
        return <div className="col-md-12">
                {this.props.children}
        </div>
    }
}

export default class Blue extends Component {
    render() {
        return (
                <div className="blue container text-center my-5">
                    <div className="row">
                        <BlueCard>
                            <img  src={blueBear} alt="rasm" className="mt-5" />
                            <h1 className="my-3">Start your free <br />
                                Homerun trial today</h1>
                            <Button color="dark">Start free trial</Button> <br />
                            <div className="my-5">
                                <FontAwesomeIcon icon={faCheck}/> Totally free for 15 days
                                <FontAwesomeIcon className="ms-5 " icon={faCheck}/> No credit card needed
                            </div>
                       </BlueCard>
                    </div>
                </div>
        )
    }
}
