import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  return (
    <div
      className="skillsdiv"
      style={{ textAlign: "center", marginTop: "20px" }}
    >
      <p className="descparagraph">
        <span className="descriptionSpan"> Skills: </span>
        AWS, React, Node.js, Express.js, MongoDB, JavaScript, HTML, CSS, Nextjs,
        Domain Configuration, Hosting (Netlify, Vercel, aws , render, microsoft
        azure), GitHub, Git, REST APIs, Postman, Bootstrap, Material UI,
        Tailwind CSS, Redux, React Router, Axios, Seo , Pug ,ThreeJs, Stripe,
        Flutter wave , S3 bucket , Frontend, Backend , Responsiveness , styled
        component css etc
      </p>
      <button className="homebutton" onClick={() => navigate("/")}>
        Back to Home
      </button>
    </div>
  );
};

export default Skills;
