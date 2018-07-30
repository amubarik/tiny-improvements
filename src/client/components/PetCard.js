import React from "react";

const PetCard = props => (
    <div>
        <h1> Hi! I am a pet and my name {props.name} </h1>
        <p> My age is {props.age}</p>
    </div>

);

export default PetCard;