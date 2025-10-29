import React from "react";
import "./../Style/home.css";
import home from "./../assets/images/home.png";

function Home() {
  return (
    <div className="home " style={{ backgroundImage: `url(${home})` }}>
      <div className="home__content">
        <h1>Welcome to Food Choose</h1>
        <p>Your one-stop solution for food recommendations</p>
        <button className="home__button">Get Started</button>
      </div>
    </div>
  );
}

export default Home;
