import React, { Component, lazy, Suspense } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button
} from "reactstrap";
import Game from "components/Game";
import puzzleData from "DATA.json";
import PuzzleGeneration from "../../components/PuzzleGeneration";
import axios from "axios";

class WordFind extends Component {
  constructor(props) {
    super(props);

    // TODO: Load data asynchronously.
    this.state = {
      //puzzles: puzzleData.puzzles,
      puzzles: [
        {
          level: 0,
          difficulty: " ",
          answers: "",
          grid: []
        }
      ],

      info: true
    };
    this.toggleInfo = this.toggleInfo.bind(this);
    this.postMap = this.postMap.bind(this);
  }

  componentDidMount() {
    this.getMapFromServer();
  }

  toggleInfo() {
    this.setState({
      info: !this.state.info
    });
  }

  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  //save data to word find
  postMap() {
    axios.post("/api/wordFind/post").then(res => {
      alert("post succesful");
    });
  }

  //get map from database
  getMapFromServer() {
    axios
      .get("/api/wordFind/get")
      .then(response => {
        //print  console() you can not add "string" in console ,just print it alone
        console.log(response.data.puzzles);
        this.setState({
          puzzles: response.data.puzzles
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getMapFromServer();
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12" lg="12">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                {/*<button onClick={this.postMap}>post map</button> */}
                <Game />
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: "70px" }} />
            </Card>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.info}
          toggle={this.toggleInfo}
          className={"modal-info " + this.props.className}
        >
          <ModalHeader toggle={this.toggleInfo}>
            Welcome to the Word-Find game!
          </ModalHeader>
          <ModalBody>
            There are 3 difficulties and 10 levels in each difficulty.
            <br />
            You should find the words in the boxes as shows below.
            <br />
            When you find a word, you can drag from start of the word to the
            end.
            <br />
            Good luck!
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleInfo}>
              I am ready!
            </Button>{" "}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WordFind;
