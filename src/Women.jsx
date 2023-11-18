import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
function Women() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setItems(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="container">
      <div className="all-links">
        <NavLink className="all-link" to="/">
          All
        </NavLink>
        <NavLink className="all-link" to="/electronics">
          Electronics
        </NavLink>
        <NavLink className="all-link" to="/women">
          Women's clothing
        </NavLink>
        <NavLink className="all-link" to="/jewelery">
          Jewelery
        </NavLink>
        <NavLink className="all-link" to="/men">
          Men's clothing
        </NavLink>
      </div>
      <div className="products">
        {items
          .filter((item) => item.category === "women's clothing")
          .map((item) => {
            return (
              <div key={item.id} className="card">
                <img src={item.image} alt="" />
                <h3>{item.title}</h3>
                <small>{item.category}</small>
                <p>{item.price} $</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Women;
