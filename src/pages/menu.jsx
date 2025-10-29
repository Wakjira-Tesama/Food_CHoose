import React from "react";
import "./../Style/menu.css";
import { MenuList } from "../components/MenuList.jsx";
import MenuItem from "../components/menuItme.jsx";

function Menu() {
  return (
    <div className="menu">
      <h1>Menu Page</h1>
      <div className="menu__items">
        {MenuList.map((menuItem, index) => (
          <MenuItem key={index} item={menuItem} />
        ))}
      </div>
    </div>
  );
}

export default Menu;
