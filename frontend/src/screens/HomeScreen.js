import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import SearchPet from "../components/SearchPet";
import PetsList from "../components/PetsList";

function HomeScreen() {
  const [petsf, setPetsf] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const { data } = await axios.get("/api/pets");
      setPets(data);
    };
    fetchPets();
  }, []);

  useEffect(() => {
    const fetchPetsf = async () => {
      const { data } = await axios.get("/api/pets");
      setPetsf(data);
    };
    fetchPetsf();
  }, []);

  let petMap = new Map();
  let breedSet = new Set();
  // process the original data
  for (let i = 0; i < petsf.length; i++) {
    let animal = petsf[i].animal;
    if (petMap.has(animal)) {
      let set = petMap.get(animal);
      set.add(petsf[i].breed);
      breedSet.add(petsf[i].breed);
      petMap.set(animal, set);
    } else {
      let set = new Set();
      set.add(petsf[i].breed);
      breedSet.add(petsf[i].breed);
      petMap.set(animal, set);
    }
  }

  const animals = Array.from(petMap.keys());
  const breeds = Array.from(breedSet);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <SearchPet
            petMap={petMap}
            animals={animals}
            breeds={breeds}
            setPets={setPets}
          />
        </Col>
        <Col md={9}>
          <PetsList pets={pets} />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
