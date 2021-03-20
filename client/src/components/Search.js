import React, { useState, useEffect } from "react";
import SearchTable from "./SearchTable";
import Form from "react-bootstrap/Form";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import "../App.css";
import axios from "axios";
import Col from "react-bootstrap/Col";


const SearchForm = () => {
  const [dbLabel, setdbLabel] = useState("");
  const [instrument, setInstrument] = useState("");
  const [bandList, setBandList] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    axios
      .get("https://duet-nw.herokuapp.com/api/" + dbLabel + "/" + instrument)
      .then((result) => {
        console.log("result", result);
        console.log("result data", result.data);
        const data = result.data;
        setBandList([...data]);
        console.log("bandlist", bandList);
      });
  };


  return (
    <div>
      <Jumbotron fluid className="jumbotron">
        <Container>
          <h1>Start Your Search</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
      <br></br>
      <Form className="UserForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search for a Band/Musician</Form.Label>
          <Form.Control type="email" placeholder="Enter username" />
          <Form.Text className="text-muted">
            Who do you want to fight with?
          </Form.Text>
        </Form.Group>

        <br></br>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Band or Musician?</Form.Label>
          <Form.Control
            onChange={(e) => {
              console.log(e.target.value);
              setdbLabel(e.target.value);
            }}
            as="select"
            defaultValue="Choose..."
          >
            <option>Choose...</option>

            <option value="bands">Search For Bands</option>
            <option value="musicians">Search for Musicians</option>
          </Form.Control>
        </Form.Group>

        <br></br>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Instrument Playing</Form.Label>
          <Form.Control
            onChange={(e) => {
              console.log(e.target.value);
              setInstrument(e.target.value);
            }}
            as="select"
            defaultValue="Choose..."
          >
            <option>Choose...</option>

            <option value="accordian">Accordion</option>
            <option value="acoutic">Acoustic Guitar</option>
            <option value="flute"> Flute</option>
            <option value="clarinet">Clarinet</option>
            <option value="saxophone">Saxophone</option>
            <option value="drum">Drums</option>
            <option value="electric">Electric Guitar</option>
            <option value="nunchucks">nunchucks</option>
            <option value="">...</option>
            <option value="">...</option>
            <option value="">...</option>
            <option value="">...</option>
            <option value="">...</option>
          </Form.Control>
        </Form.Group>
        <br></br>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>What genre of fighting?</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <br></br>
        <Form.Group controlId="formBasicPassword">
          <Form.Label> Fight location?</Form.Label>
          <Form.Control type="password" placeholder="re-enter password" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleChange}>
          Submit
        </Button>
      </Form>
              <SearchTable bandList={bandList} dbLabel={dbLabel}/>
      
    </div>
  );
};

export default SearchForm;
