import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Product({ pet }) {
  return (
    <Card className="border-primary mb-3 my-3 p-3 rounded">
      <Link to={`/pets/${pet._id}`}>
        <Card.Img src={pet.image} width="100%" height="200" variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/pets/${pet._id}`}>
          <Card.Title as="div">
            <strong>{pet.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as="div">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Age: {`${pet.age} `}Y</li>
            <li className="list-group-item">Weight: {`${pet.weight}`}</li>
            <li className="list-group-item">Location: {`${pet.location}`}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
