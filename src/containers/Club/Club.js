import React, { Component } from 'react';
import "./Club.css";
import club from "../../img/club.png";
import { Button } from 'reactstrap';
import JoinClub from '../../components/JoinClub';
import Transfer from '../../components/Transfer';
import JoinContinue from '../../components/JoinContinue/JoinContinue';



export default class Club extends Component {
    render() {
        return (
                <div className="container club">
                    <div className="row">
                        <div className="col-md-12">
                            <JoinClub>
                            <div className="text-center text-white joinClub mt-5">
                                <img src={club} alt="rasm" />
                                <h1 className="my-3">Join the club.</h1>
                                    <p className="my-2">Homerun customers share a passion for culture, design and innovation. <br />
                                    We all agree hiring can be more meaningful and personal.
                                    </p>
                                <Button className="button mt-5">About our customers</Button>
                            </div>
                            </JoinClub>

                        <JoinContinue/>
                        </div>
                    </div>
                </div>
        )
    }
}
