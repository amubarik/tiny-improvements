import React, { Component } from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";
import AwardCard from './components/AwardCard';
import axios from "axios";
import KudosForm from './components/KudosForm';

class App extends Component {
  state = {
    users: [],
    awards: [],
    kudosText: '',
    kudosTitle: '',
    receiver: '',
    sender: ''
  }


  updateKudoText = event => {
    this.setState({ kudosText: event.target.value });
  };

  updateKudoTitle = event => {
    this.setState({ kudosTitle: event.target.value });
  };

  updateReceiver = event => {
    this.setState({ receiver: event.target.value });
  };

  updateSender = event => {
    this.setState({ sender: event.target.value });
  };


  postData = () => {
    console.log("Click");
    axios.post("/api/kudos", {
      id: 4,
      title: this.state.kudosTitle,
      comment: this.state.kudosText
    })
      .then(response => {
        this.setState({
          awards: response.data
        })
      })
  }

  componentDidMount = () => {
    axios.get("/api/kudos")
      .then(response => {
        this.setState({
          awards: response.data
        })
      })

    axios.get("/api/users")
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
                <Button color="success">Give Kudos</Button>
              </CardBody>
            </Card>
          </Col>
          <Col md="12" lg="9">
            {this.state.awards.map((awards, index) => <AwardCard key={index} rec={awards.receiver} name={awards.title} description={awards.comment} />)}

          </Col>
        </Row>
        <Row>
          <Col md="12">
            <KudosForm
              awards={this.state.awards}
              postData={this.postData}
              updateKudoText={this.updateKudoText}
              updateKudoTitle={this.updateKudoTitle}
              updateReceiver={this.updateReceiver}
              updateSender={this.updateSender}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;

// import React, { Component } from "react";
// import { Col, Container, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
// import VoteForm from './components/VoteForm'
// // import NameCard from './components/NameCard'
// import AwardCard from './components/AwardCard'
// import KudosForm from './components/KudosForm'
// import PetCard from './components/PetCard'
// import axios from "axios"



// class App extends Component {

//   constructor() {
//     super();
//     this.state = {

//       awards: [],
//       restaurants: [
//         {
//           name: 'Maialino',
//           genre: 'Italian',
//           score: 4.4
//         },
//         {
//           name: 'Beyond Sushi',
//           genre: 'Vegan',
//           score: 4.7
//         },
//         {
//           name: 'Abyssinia',
//           genre: 'Ethiopian',
//           score: 4.5
//         },
//         {
//           name: 'La Roja de Todos',
//           genre: 'Chilean',
//           score: 4.5
//         }
//       ],
//       users: [],
//       pets: [],
//       friends: []
//     }
//   }

//   componentDidMount = () => {
//     axios.get("/api/users").then(response =>
//       this.setState({
//         users: response.data
//       })
//     );

//     axios.get("/api/friends").then(response =>
//       this.setState({
//         friends: response.data

//       })
//     );
//     // 
//   }

//   postKudo = () => {
//     axios.post("/api/awards",
//       {
//         id: 5,
//         title: "Fastest Typer Award",
//         comment: "Have you seen how fast George types??"
//       }).then(response => {
//         this.setState({
//           awards: response.data
//         })
//       })
//   }


//   render() {
//     return (
//       <Container>
//         <Row>
//           <Col md="12">
//             <h1>Tiny Progress</h1>
//           </Col>
//         </Row>
//         <br />
//         <Row>
//           <Col md="12" lg="3">
//             <Button color="success">Give Kudos</Button>
//           </Col>
//           <Col md="12">
//             {this.state.awards.map((awards, index) => <AwardCard key={index} rec={awards.receiver} name={awards.title} description={awards.comment} />)}
//           </Col>
//         </Row>
//         <hr />
//         <h1> Names </h1>
//         {
//           this.state.users.map((user, index) => <p key={index}>Hello, my name is {user.name}  🚀 </p>)
//         }

//         < hr />

//         <KudosForm userObjects={this.state.users} />

//         {/* NEW CODE GOES BELOW */}
//         {this.state.restaurants.map((restaurants, index) => <p key={index}>{restaurants.name} </p>)}
//         {/* <VoteForm />
//         <NameCard /> 
//         <AwardCard />*/}
//         {/* {this.state.users.map(user => <NameCard name={user.name} age={user.userId} />)} */}

//         {/* New Code goes here */}
//         {/* {
//           this.state.pets.map(pet => <PetCard name={pet.name} age={pet.age} />)
//         } */}
//         {/* NEW CODE GOES BELOW */}


//         < hr />
//         <h1> 🙋🏽 Friend Space </h1>
//         <br />
//         <h4> My Friend List: </h4>
//         <br />
//         {this.state.friends.map((friends, index) => <p key={index}>{friends.name} </p>)}
//         {/* {
//           this.state.friends.map(e => (
//             <Card>
//               <CardBody >
//                 <h2> {e.name}</h2>
//                 <p> {e.location} </p>
//               </CardBody>
//             </Card>
//           ))
//         } */}

//         <Row><Col md="12">
//           <Button onClick={this.postKudo}> Click me </Button>
//         </Col></Row>

//       </Container >
//     );
//   }
// }

// export default App;