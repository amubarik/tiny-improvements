import React from "react";
import { Col, Container, Row, Form, FormGroup, Input, Label, Button, Card, CardBody } from "reactstrap";


const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label for="exampleExample">Give Kudos to</Label>
            <Input type="select">
                {props.userObjects.map(userObject => <option> {userObject.name} </option>)} */}
            </Input>
        </FormGroup>

        <FormGroup>
            <Input type="text" placeholder="Kudos Title" />
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Text" />
        </FormGroup>
    </Form>

);

export default KudosForm;