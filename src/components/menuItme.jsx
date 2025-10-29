import React from "react";
import "./../Style/menu.css";

function MenuItem({ item }) {
  return (
    <div className="menu__item">
      <div
        className="menu__item_image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="menu__item_content">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <span>${item.price.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default MenuItem;
