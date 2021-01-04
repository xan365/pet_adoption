import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Image } from "react-bootstrap";

/***
 * view for pet details
 */
function ProductScreen({ match }) {
  const [pet, setPet] = useState([]);

  useEffect(() => {
    const fetchPet = async () => {
      const { data } = await axios.get(`/api/pets/${match.params.id}`);
      setPet(data);
    };
    fetchPet();
  }, [match]);

  return (
    <div>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={pet.image} alt={pet.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{pet.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Sex: {pet.sex}</ListGroup.Item>
            <ListGroup.Item>Age: {pet.age}</ListGroup.Item>
            <ListGroup.Item>Weight: {pet.weight}</ListGroup.Item>
            <ListGroup.Item>Location: {pet.location}</ListGroup.Item>
            <ListGroup.Item>Description: {pet.description}</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
