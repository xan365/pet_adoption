import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

class SearchPet extends Component {
  constructor() {
    super();
    this.state = {
      petMap: [],
      animals: [],
      breeds: [],
    };

    this.changeAnimal = this.changeAnimal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { petMap, breeds, animals } = nextProps;
    this.setState({
      petMap: petMap,
      breeds: breeds,
      animals: animals,
    });
  }

  // Linkage between two dropdowns
  changeAnimal(e) {
    const petMap = this.state.petMap;
    const breedSet = petMap.get(e.target.value);
    const currBreeds = Array.from(breedSet);
    this.setState({ breeds: currBreeds });
  }

  handleSubmit(e) {
    const userZipcode = this.userZipcode.value;
    const userAnimal = this.userAnimal.value;
    const userBreed = this.userBreed.value;
    const userMaxAge = this.userMaxAge.value;

    const updatePets = async () => {
      const { data } = await axios.get(
        `/api/pets/${userZipcode}/${userAnimal}/${userBreed}/${userMaxAge}`
      );
      this.props.setPets(data);
    };
    updatePets();
    this.userAnimal = this.props.animals;
    // collect data without submitting the form
    e.preventDefault();
  }

  render() {
    const { animals } = this.props;
    const breeds = this.state.breeds;

    return (
      <div>
        <Container>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <legend>Search: </legend>
              <div className="form-group">
                <label>Zipcode</label>
                <input
                  className="form-control"
                  ref={(input1) => (this.userZipcode = input1)}
                  aria-describedby="zipcodeHelp"
                  required
                  pattern="[0-9]{5}"
                />
                <small className="form-text text-muted">
                  We have pets in 90248, 91303, 92110 for now
                </small>
              </div>
              <div className="form-group">
                <label>Animal</label>
                <select
                  className="form-control"
                  ref={(select1) => (this.userAnimal = select1)}
                  onChange={this.changeAnimal}
                >
                  {animals.map((animal, index) => (
                    <option key={index} value={animal}>
                      {animal}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Breed</label>
                <select
                  className="form-control"
                  ref={(select2) => (this.userBreed = select2)}
                >
                  {breeds.map((breed, index) => (
                    <option key={index}>{breed}</option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Max Age</label>
                <input
                  className="form-control"
                  ref={(input2) => (this.userMaxAge = input2)}
                  aria-describedby="maxAgeHelp"
                  required
                  pattern="^[1-9][0-9]*$"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </fieldset>
          </form>
        </Container>
      </div>
    );
  }
}

SearchPet.propTypes = {
  petMap: PropTypes.object.isRequired,
  animals: PropTypes.array.isRequired,
  breeds: PropTypes.array.isRequired,
  setPets: PropTypes.func.isRequired,
};

export default SearchPet;
