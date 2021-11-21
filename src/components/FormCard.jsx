import React from "react";
import {Card} from "react-bootstrap";

function FormCard(props) {
    return (
        <div className={"center"}>
            <Card style={{width: '25rem'}}>
                <Card.Header className={"form-head"}>
                    <h1>{props.cardTitle}</h1>
                </Card.Header>
                <Card.Body>
                    {props.cardBody}
                </Card.Body>
            </Card>
        </div>
    )
}

export default FormCard;