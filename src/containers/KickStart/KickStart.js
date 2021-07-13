import React, { Component } from 'react';
import "./KickStart.css";
import photo from "../../img/photo1.png";
import { Button } from 'reactstrap';
import JoinClub from '../../components/JoinClub';
import photo2 from "../../img/photo1.png"




export default class KickStart extends Component {
    render() {
        return (
                <div className="container kickStart">
                    <div className="row">
                        <div className="col-md-12">
                            <JoinClub>
                            <div className="text-center text-white joinClub mt-5">
                              <span className="badge bg-danger">new</span>
                                <h1 className="my-3">Kickstart hiring <br />with Homerun templates.</h1>
                                    <p className="my-2">Ready to use job templates to help you with <br />
                                    the hardest parts of creating a job post.
                                    </p>
                                <Button className="button mt-5">Explore all templates</Button>
                            </div>
                        </JoinClub>

                    </div>
                    <div className="mt-5">
                            <img className="w-100" src={photo2} alt="rasm" />
                        </div>
                    </div>
                </div>
        )
    }
}
