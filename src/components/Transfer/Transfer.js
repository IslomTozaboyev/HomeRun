import React, { Component } from 'react';
import "./Transfer.css";
import { Button } from 'reactstrap';
import transfer from "../../img/transfer.png";


class TransferCard extends Component {
    render() {
        console.log(this.props);

        return <div className={`col-lg-6 p-0 m-0 || ${this.props.className}`}>
            {this.props.children}
        </div>
    }
}

export default class Transfer extends Component {
    render() {
        return (
         <div className="transfer" id="Templates">
                <div className="container">
                    <div className="row p-0 ">
                         <TransferCard>
                            <img className="w-100" src={transfer} alt="rasm" />
                        </TransferCard>
                        <TransferCard className="col-lg-6 mt-5 p-0 ps-5">
                            <h5 className="text-warning fw-bold">Create</h5>
                            <h1 className="fw-bold">An experience candidates simply love..</h1>
                            <h6 className="my-5">Treat candidates with a rich career site, beautiful job posts, tailored application forms and faster response times.</h6>
                            <Button className="mt-3" color="light"><b>Learn More</b></Button>
                        </TransferCard>
                    </div>
                </div>
         </div>
        )
    }
}
