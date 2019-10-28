import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";


//  import "./style.css "
class TipCalculator extends Component {
  render() {
    return (
      <div className="container">
        <div className="tipcalculator-box bg-primary">
        <Modal.Header>
              <Modal.Title className="font-weight-bold">TIP CALCULATOR</Modal.Title>
            </Modal.Header>
<form>
<div className="">
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text font-weight-bold">
                      NGN
                    </span>
                  </div>
                  <input type="text" className="form-control" placeholder="Bill Amount"/>
                </div>
              </div>

</form>


        </div>
      </div>
    );
  }
}

export default TipCalculator;
