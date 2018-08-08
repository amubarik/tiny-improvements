import React, { Component } from "react";
import { Tooltip, Collapse, Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import AwardCard from './components/AwardCard';
import axios from "axios";
import KudosForm from './components/KudosForm';



class App extends Component {
  state = {
    users: [],
    awardsAll: [],
    myAwards: [],
    sender: "",
    receiver: "",
    comment: "",
    title: "",
    isModalOpen: false,
    isShowKudos: false,
    isHoverOn: false

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
    this.setState({ isModalOpen: !this.state.isModalOpen });
  }

  toggleAllKudos = () => {
    this.setState({ isShowKudos: !this.state.isShowKudos });
  }

  toggleOverMyKudos = () => {
    this.setState({ isHoverOn: !this.state.isHoverOn });
  }

  postData = () => {
    if (this.state.title && this.state.comment && this.state.receiver && this.state.sender) {
      axios.post("/api/kudos", {
        Name: this.state.title,
        Comment__c: this.state.comment,
        Receiver__c: this.state.users.find(user => user.name === this.state.receiver).id,
        Sender__c: this.state.users.find(user => user.name === this.state.sender).id
      }).then(response => {
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

    const promise1 = axios.get("/api/users")

    const promise2 = axios.get("/api/aiyshaKudos")
    const finalpromise = [promise1, promise2]

    axios.all(finalpromise)
      .then(allResponses => {
        const result1 = allResponses[0]
        const result2 = allResponses[1]

        const myAwardsNew = result2.data.map(myKudo => {
          const senderIDKudos = myKudo.sender__c
          const receiverIDKudos = myKudo.receiver__c
          const senderUser = result1.data.find(user => { return user.id === senderIDKudos })
          const receiverUser = result1.data.find(user => { return user.id === receiverIDKudos })

          myKudo.sender__c = senderUser.name
          myKudo.receiver__c = receiverUser.name
          return myKudo
        })
        this.setState({
          myAwards: myAwardsNew,
          users: result1.data
        })
      })
  }


  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <h1 align="center" className="tiny-progress-header">Tiny Progress React Project</h1>
          </Col>
        </Row>
        <br />
        <Row>
          <Col md="12" lg="3">
            <Button id="DisplayTooltip" color="success" onClick={this.toggleModal}>Show me my Kudos!</Button>
            <Tooltip placement="right" isOpen={this.state.isHoverOn} target="DisplayTooltip" toggle={this.toggleOverMyKudos}>
              This will popup all the Kudos you have received! Click to see how you are killing it!
            </Tooltip>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
              <ModalHeader toggle={this.toggleModal}>My Kudos</ModalHeader>
              <ModalBody>
                <Row>
                  <Col md="12" lg="9">
                    {this.state.myAwards.map(elem => (
                      <AwardCard title={elem.name}
                        key={elem.id}
                        sender={elem.sender__c}
                        receiver={elem.receiver__c}
                        text={elem.comment__c} />
                    ))}
                  </Col>
                </Row>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
              </ModalFooter>
            </Modal>
            <br />
            <br />
          </Col>
        </Row>
        <Row>

          <Col md="12" lg="9">
            <Button color="success" onClick={this.toggleAllKudos}>Show All Kudos</Button>
            <Collapse isOpen={this.state.isShowKudos}>

              {this.state.awardsAll.map(elem => (
                <AwardCard title={elem.name}
                  key={elem.id}
                  sender={elem.sender__r.Name}
                  receiver={elem.receiver__r.Name}
                  text={elem.comment__c} />
              ))}
            </Collapse>
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
      </Container >
    )
  }
}

export default App;