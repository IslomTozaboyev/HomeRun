import React, { Component } from 'react';
import "./JoinContinue.css";
import { Button } from 'reactstrap';
import women from "../../img/women.png";
import dooop from "../../img/dooop.png";

class JoinCard extends Component {
    render() {
        console.log(this.props);

        return <div className={`col-lg-6 p-0 m-0 || ${this.props.className}`}>
            {this.props.children}
        </div>
    }
}

export default class JoinContinue extends Component {
    render() {
        return (
         <div className="joinContinue">
                <div className="container mt-5 my-5">
                    <div className="row p-0 ">
                         <JoinCard>
                            <img className="w-100 h-100 women" src={women} alt="rasm" />
                        </JoinCard>
                        <JoinCard className="col-lg-6 p-5 py-5  doop__bg">
                            <img src={dooop} alt="rasm" />
                            <h4 className="my-5">“You don't need to be a pro in HR or even in Homerun to be able to use it. It's so easy that anyone in the team can figure it out.”</h4>
                            <h5>Isabel Machielse <br />
                            People % Culture Coordinator
                            </h5>
                            <Button className="mt-3 button" color="light"><b>Read customer story</b></Button>
                        </JoinCard>
                    </div>
                </div>
         </div>
        )
    }
}
