import React, { Component } from 'react';
import "./Work.css";
import Work__img from "../../img/work.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default class Work extends Component {
    render() {
        return (
            <div className="work">
               <div className="container">
                    <div className="row text-center d-flex justify-content-center align-items-center">
                        <div className="col col-md-6">
                            <h2 className="my-5">How Homerun works</h2>
                            <div className="workimg">
                                <img src={Work__img} className="w-100" alt="rasm" />
                            <div className="box d-flex align-items-center justify-content-center">
                                <FontAwesomeIcon icon={faPlayCircle} />
                                <p className="fw-bold mt-3 ms-2"> Watch: Homerun in 90 seconds</p>
                            </div>
                            </div>

                        </div>
                    </div>
               </div>
            </div>
        )
    }
}
