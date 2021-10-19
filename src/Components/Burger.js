import React from "react";
import { elastic as Menu } from "react-burger-menu";
import "./Burger.css";
function Burger(params) {
  const showSettings = (event) => {
    event.preventDefault();
  };
  return (
    <Menu right {...params}>
      <a href="#about">About Us</a>
      <a href="#case">Case Studies</a>
      <a href="#footer">Contact Us</a>
    </Menu>
  );
}

export default Burger;
