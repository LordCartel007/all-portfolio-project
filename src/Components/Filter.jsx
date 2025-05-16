import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Filter = ({ onTitleChange, onRatingChange }) => {
  const navigate = useNavigate();
  return (
    <div className="filterContainer">
      <h3 className="text-white"> Filter by: </h3>

      <InputGroup className="inputcontainer mb-3  ">
        <InputGroup.Text id="basic-addon1">Title</InputGroup.Text>
        <Form.Control
          placeholder="Enter the project title"
          aria-label="title"
          aria-describedby="basic-addon1"
          //   we used the ...inputvalues to seperate the rating from the title and update only the title when there is change
          onChange={(e) => {
            onTitleChange(e.target.value);
          }}
        />
      </InputGroup>

      <InputGroup className="mb-3 w-30 ">
        <InputGroup.Text id="basic-addon1">Rating</InputGroup.Text>
        <Form.Control
          type="number"
          min={1}
          max={10}
          step={1}
          placeholder="Enter the project rating"
          aria-label="Rating"
          aria-describedby="basic-addon1"
          onChange={(e) => {
            onRatingChange(e.target.value);
          }}
        />
      </InputGroup>

      <button
        className="homebutton mb-4"
        onClick={() => navigate("/all-skills")}
      >
        View All Skills
      </button>
    </div>
  );
};

export default Filter;
