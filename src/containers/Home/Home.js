import React, { Component } from 'react';
import "./Home.css";
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/img3.png";
import img4 from "../../img/img4.png";
import img5 from "../../img/img5.png";
import img6 from "../../img/img6.png";
import img7 from "../../img/img7.png";

export default class Home extends Component {
    render() {
        return (
          <div className="home">
                <div className="container">
                   <div className="text-center">
                        <h1 className="mt-4">Where hiring <br /> comes together.</h1>
                        <p className="my-4">Everything you need to organise your hiring <br /> and make a great impression.</p>
                    </div>
                    <div className="text-center">
                    <InputGroup className="d-flex justify-content-center align-items-center">
                      <Input />
                         <InputGroupAddon addonType="prepend"><Button>Start free trial</Button></InputGroupAddon>
                    </InputGroup>
                        <h6 className="text-secondary mt-5">Join thousands of teams hiring with Homerun</h6>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <img src={img1} alt="rasm" />
                    <img src={img2} alt="rasm" />
                    <img src={img3} alt="rasm" />
                    <img src={img4} alt="rasm" />
                    <img src={img5} alt="rasm" />
                    <img src={img6} alt="rasm" />
                    <img src={img7} alt="rasm" />
              </div>
          </div>
        )
    }
}
