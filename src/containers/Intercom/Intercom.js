import React, { Component } from 'react';
import "./Intercom.css";
import capterra from "../../img/capterra.png";
import stars from "../../img/stars.png";
import intercom from "../../img/intercom.png";
import smile from "../../img/smile.png";

class Internet extends Component {
    render() {
        return <div className="col-md-6">
                {this.props.children}
            </div>
        }
}

export default class Intercom extends Component {
    render() {
        return (
            <div className="intercom">
                <div className="container">
                    <div className="row">
                        <Internet>
                            <div className="text-center m-0 mb-5">
                                <img src={capterra} alt="rasm" />
                                <h1 className="my-3">4,5</h1>
                                <img className="my-3" src={stars} alt="rasm" />
                                <p>Average review on Capterra, <br />
                                independent review site</p>
                            </div>
                        </Internet>
                        <Internet>
                            <div className="text-center m-0">
                                <img src={intercom} alt="rasm" />
                                <h1 className="my-3">98,8%</h1>
                                <img className="my-3" src={smile} alt="rasm" />
                                <p>Average rating based on <br />
                                1500+ support conversations</p>
                            </div>
                        </Internet>
                    </div>
                </div>
            </div>
        )
    }
}
