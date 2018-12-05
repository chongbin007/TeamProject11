import React, { Component } from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

import Scrabble from "../../components/WordUnscramble/Scrabble";
class WordUnscramble extends Component {
  constructor(props) {
    super(props);

    // TODO: Load data asynchronously.
    this.state = {
     
    };
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
              
                <Scrabble />
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }} />
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default WordUnscramble;
