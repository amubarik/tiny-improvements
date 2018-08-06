import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AwardCard from './components/AwardCard';
import axios from "axios";
import KudosForm from './components/KudosForm';


class App extends Component {
  state = {
    users: [],
    awardsAll: [],
    myawards: [],
    sender: "",
    receiver: "",
    comment: "",
    title: "",
    isModalOpen: false,

  }

  updateSender = event => {
    this.setState({ sender: event.target.value });
  };

  updateTitle = event => {
    this.setState({ title: event.target.value });
  };

  updateReceiver = event => {
    this.setState({ receiver: event.target.value });
  };

  updateComment = event => {
    this.setState({ comment: event.target.value });
  };

  toggleModal = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })

  }

  postData = () => {
    if (this.state.title && this.state.comment && this.state.receiver && this.state.sender) {
      console.log("This is working");
      axios.post("/api/kudos", {
        Name: this.state.title,
        Comment__c: this.state.comment,
        Receiver__c: this.state.users.find(user => user.name === this.state.receiver).id,
        Sender__c: this.state.users.find(user => user.name === this.state.sender).id
      }).then(response => {
        // this.setState({
        //   awards: response.data
        // })
      })
    }
  }

  componentDidMount = () => {
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awardsAll: response.data
        })
      })

    axios.get("/api/users")
      .then(response => {
        this.setState({
          users: response.data
        })
      })

    axios.get("/api/usersA")
      .then(response => {
        this.setState({
          users: response.data
        })
      })
  }



  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1>Tiny Progress</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Card>
              <CardBody className="mx-auto">
                <Button color="success" onClick={this.toggleModal}>Show me my Kudos!</Button>
                <Modal isOpen={this.state.isModalOpen}>
                  <ModalHeader>Kudos received</ModalHeader>
                  <ModalBody>
                    <Row>
                      <Col md="12" lg="9">
                        {this.state.myawards.map(elem => (
                          <AwardCard title={elem.name}
                            key={elem.id}
                            sender={elem.sender__r.Name}
                            receiver={elem.receiver__r.Name}
                            text={elem.comment__c} />
                        ))}
                      </Col>
                    </Row>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                  </ModalFooter>
                </Modal>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awardsAll.map(elem => (
              <AwardCard title={elem.name}
                key={elem.id}
                sender={elem.sender__r.Name}
                receiver={elem.receiver__r.Name}
                text={elem.comment__c} />
            ))}
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <KudosForm
              users={this.state.users}
              updateSender={this.updateSender}
              updateReceiver={this.updateReceiver}
              updateTitle={this.updateTitle}
              updateComment={this.updateComment}
              postData={this.postData}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;