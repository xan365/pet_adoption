import React from "react";

import { Row, Col } from "react-bootstrap";

import Pet from "./Pet";

function PetsList({ pets }) {
  // const [pets, setPets] = useState([]);

  // useEffect(() => {
  //   const fetchPets = async () => {
  //     const { data } = await axios.get("/api/pets");
  //     setPets(data);
  //   };
  //   fetchPets();
  // }, []);

  return (
    <div>
      <h1>Search Result: </h1>
      <Row>
        {pets.map((pet, index) => (
          // 小屏设备sm一行显示1个，大屏设备lg一行显示三个
          <Col key={index} sm={12} md={6} lg={6} xl={4}>
            <Pet pet={pet} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PetsList;
