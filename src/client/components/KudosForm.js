import React from "react";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

const KudosForm = props => (
    <Form>
        <FormGroup>

            <h3 className="give-kudos-header">Give Kudos Form</h3>
            <Input type="select" onChange={props.updateSender}>
                <option>Please select a Sender!</option>
                {props.users.map(element => <option>{element.name}</option>)}
            </Input>
            <Input type="select" onChange={props.updateReceiver} className="give-kudos-input">
                <option>Please select a Receiver!</option>
                {props.users.map(element => <option>{element.name}</option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Kudos Title" onChange={props.updateTitle} />
        </FormGroup>
        <FormGroup>
            <Input
                type="textarea"
                placeholder="Kudos text"
                onChange={props.updateComment}
            />
        </FormGroup>
        <FormGroup>
            <Button onClick={props.postData}> Submit </Button>
        </FormGroup>
    </Form>

)

export default KudosForm;