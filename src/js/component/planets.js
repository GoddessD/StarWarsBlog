import React from "react";

export const Planets = (props) => {
  return (
    <div className="col">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src={"https://loremflickr.com/320/240/" + props.planet.name}
          alt="Card image cap"
        />
        <div className="card-body">
        <h5 className="card-title">{props.planet.name}</h5>
          <p className="card-text">
          Population: {props.planet.population}
         </p>
         <p className="card-text">
          Terrain: {props.planet.terrain}
         </p>
         
          <div className="navbar">
            <a href="#" className="btn btn-primary">
              Learn More
            </a>
            <button className="btn btn-primary">
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
