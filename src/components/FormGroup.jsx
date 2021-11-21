import React from "react";
import {Form} from "react-bootstrap";

function FormGroup(props){
    return (
        <Form.Group className="mb-3">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type={props.type} name={props.name} value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
        </Form.Group>
    )
}

export default FormGroup;