import React, { Component } from "react";
import { Col, Container, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import VoteForm from './components/VoteForm'
import NameCard from './components/NameCard'
import AwardCard from './components/AwardCard'
import KudosForm from './components/KudosForm'



class App extends Component {

  constructor() {
    super();
    this.state = {

      awards: [
        {
          id: 1,
          title: "Best Boss Award!",
          comment: "Thanks for always looking out for us.",
          sender: "Fabian",
          receiver: "Leon"
        },
        {
          id: 2,
          title: "Longest Commute Award!",
          comment: "I can't believe Leslie makes it to work as often as she does.",
          sender: "Archit",
          receiver: "Laura"
        },
        {
          id: 3,
          title: "Most likely to nap at work!",
          comment: "Maybe you need more coffee.",
          sender: "Gobi",
          receiver: "Owen"
        }

      ],
      restaurants: [
        {
          name: 'Maialino',
          genre: 'Italian',
          score: 4.4
        },
        {
          name: 'Beyond Sushi',
          genre: 'Vegan',
          score: 4.7
        },
        {
          name: 'Abyssinia',
          genre: 'Ethiopian',
          score: 4.5
        },
        {
          name: 'La Roja de Todos',
          genre: 'Chilean',
          score: 4.5
        }
      ],
      users: [
        {
          userId: 45089,
          name: "Owen",
          position: "Captian of the Breakroom"
        },
        {
          userId: 223,
          name: "Brooke",
          position: "Winner of All Dance-Offs"
        },
        {
          userId: 6582,
          name: "Gobi",
          position: "King of Mid-Day Naps"
        }
      ]
    }
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
            <Button color="success">Give Kudos</Button>
          </Col>
          <Col md="12">
            {this.state.awards.map(awards => <AwardCard rec={awards.receiver} name={awards.title} description={awards.comment} />)}
          </Col>
        </Row>
        <hr />
        <h1> Names </h1>
        {
          this.state.users.map(user => <p>Hello, my name is {user.name} 🚀 </p>)
        }

        <hr />

        <KudosForm userObjects={this.state.users} />

        {/* NEW CODE GOES BELOW */}
        {this.state.restaurants.map(restaurants => <p>{restaurants.name} </p>)}
        {/* <VoteForm />
        <NameCard /> 
        <AwardCard />*/}
        {this.state.users.map(user => <NameCard name={user.name} age={user.userId} />)}
      </Container>
    );
  }
}

export default App;