import React, { Component } from 'react';
import "./Hire.css";
import { Button } from 'reactstrap';
import hire from "../../img/hire.png";


class HireCard extends Component {
    render() {
        console.log(this.props);

        return <div className={`col-lg-6 p-0 m-0 || ${this.props.className}`}>
            {this.props.children}
        </div>
    }
}

export default class Hire extends Component {
    render() {
        return (
         <div className="hire">
                <div className="container">
                    <div className="row p-0 m-0">
                        <HireCard className="col-lg-6 p-0 mb-5">
                            <h5 className="text-success fw-bold">Hire</h5>
                            <h1 className="fw-bold">An all-in-one <br /> tool for your entire <br /> team.</h1>
                            <h6 className="my-5">No more ping-ponging between emails, spreadsheets, <br /> and other apps. Bring everything together in one place.</h6>
                            <Button className="mt-3" color="light"><b>Learn More</b></Button>
                        </HireCard>
                        <HireCard>
                            <img className="w-100" src={hire} alt="rasm" />
                        </HireCard>
                    </div>
                </div>
         </div>
        )
    }
}
