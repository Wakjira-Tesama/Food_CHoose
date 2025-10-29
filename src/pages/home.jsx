import React from "react";
import "./../Style/home.css";
import home from "./../assets/images/home.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home " style={{ backgroundImage: `url(${home})` }}>
      <div className="home__content">
        <h1>Welcome to Food Choose</h1>
        <p>Your one-stop solution for food recommendations</p>
        <Link to="/menu">
          <button className="home__button">Explore Menu</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
