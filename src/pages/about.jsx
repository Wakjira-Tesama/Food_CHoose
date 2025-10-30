import React from "react";
import "./../Style/about.css";
import ancoote from "./../assets/images/about.jpg";

function About() {
  return (
    <div className="about-page">
      <div
        className="about_image"
        style={{ backgroundImage: `url(${ancoote})`, maxWidth: "100%" }}
      >
        <h1>Oro Food</h1>
      </div>
      <div className="about_text">
        <h2>About Oro Food</h2>
        <p>
          Oro Food is a platform dedicated to helping users find the best food
          options based on their preferences. Whether you're looking for healthy
          meals, quick snacks, or gourmet dishes, Food Choose has got you
          covered.
        </p>
        <p>
          Our mission is to make food selection easier and more enjoyable by
          providing personalized recommendations and a wide variety of choices.
        </p>
      </div>
    </div>
  );
}

export default About;
