import React from "react";
import { Col, Container, Row, Button, Card, CardBody } from "reactstrap";

const AwardCard = props => (
    <Card>
        <CardBody className="mx-auto">
            <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
            <p>Badge Name</p>
            <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
            <h6> {props.rec} </h6>
            <h2> {props.name} </h2>
            <p>{props.description}</p>
            {/* <p>Conversion stealth influencer business-to-business entrepreneur hypotheses investor customer deployment metrics learning curve direct mailing long tail mass market. Pitch iteration stock android business-to-consumer bandwidth seed round user experience paradigm shift channels equity pivot. Metrics partner network validation responsive web design first mover advantage backing research & development market mass market innovator sales infrastructure.</p> */}
        </CardBody>
    </Card>
)

export default AwardCard;



// import React from "react";
// import { Col, Container, Row, Button, Card, CardBody, Form, FormGroup, Input, Label } from "reactstrap";

// const AwardCard = props => ( // arrow means function
//     <Card>
//         <CardBody className="mx-auto">
//             <Col md="12" lg="9">
//                 <img alt="award" src="http://www.pngmart.com/files/3/Award-PNG-Photos.png" width="50px" />
//                 <p>Badge Name</p>
//                 <img alt="avatar" src="https://www.iranketab.ir/Images/user.jpg" width="100px" />
//                 <h6> {props.rec} </h6>
//                 <h2> {props.name} </h2>
//                 <p>{props.description}</p>
//             </Col>
//         </CardBody>
//     </Card>
// )

// export default AwardCard;