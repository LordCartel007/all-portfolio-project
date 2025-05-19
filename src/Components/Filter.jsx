import React from "react";
import { InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const linkedin = "https://www.linkedin.com/in/casey-daniel-33b771341/";
const Filter = ({ onTitleChange, onRatingChange }) => {
  const navigate = useNavigate();

  const handleGithub = (e) => {
    <a href="https://github.com/LordCartel007" className=""></a>;
  };
  return (
    <div className="filterContainer">
      <div>
        <button
          className="homebutton"
          onClick={() => (window.location.href = linkedin)}
        >
          LinkedIn Profile
        </button>
        <button className="homebutton">Email Me: kccee007@gmail.com</button>
      </div>
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
      <button className="homebutton mb-4">
        <a className="gitHubLink" href="https://github.com/LordCartel007">
          <div className="inner">
            <span>GitHub Profile</span>
          </div>
        </a>
      </button>
    </div>
  );
};

export default Filter;
