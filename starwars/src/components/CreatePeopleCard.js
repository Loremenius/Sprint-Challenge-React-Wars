import React from 'react';
import App from "../App";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle
  } from 'reactstrap';

const CreatePersonCard = (props) => {

    return(
        <div>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', color:'white', width:'300px',margin:'15px',padding:'10px'}}>
                <CardBody>
                    <CardTitle>{props.object.name}</CardTitle>
                    <CardSubtitle>Found in {props.object.films.length} films.</CardSubtitle>
                    
                        <CardText>Height: "{props.object.height}"</CardText>
                        <CardText>Mass: "{props.object.mass}"</CardText>
                        <CardText>Hair Color: "{props.object.hari_color}"</CardText>
                        <CardText>Eye Color: "{props.object.eye_color}"</CardText>
                        <CardText>Birth Year: "{props.object.birth_year}"</CardText>
                        <CardText>Gender: "{props.object.gender}"</CardText>
                    
                </CardBody>
            </Card>
        </div>
    )

}

export default CreatePersonCard;