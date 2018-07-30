import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>
            <Label>Give Kudos to</Label>
            <Input type="select"
                onChange={props.updateReceiver}>
                <option label=" "></option>
                {props.awards.map((element, index) => <option key={index}>{element.receiver}</option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Label>Kudos Sender</Label>
            <Input type="select"
                onChange={props.updateSender}>
                <option label=" "></option>
                {props.awards.map((element, index) => <option key={index}>{element.sender}</option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input
                type="text"
                placeholder="Kudos Title"
                onChange={props.updateKudoTitle}
            />
        </FormGroup>
        <FormGroup>
            <Input
                type="textarea"
                placeholder="Kudos text"
                onChange={props.updateKudoText}
            />
        </FormGroup>
        <FormGroup>
            <Button onClick={props.postData}> Submit </Button>
        </FormGroup>
    </Form>
)

export default KudosForm;