import React from "react";
import {Link} from "react-router-dom"
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
            <Link to={'/planets/' + props.index}>
            <a href="#" className="btn btn-primary">
              Learn More
            </a></Link>
            <button className="btn btn-primary" onClick={() => props.addToFavorites(props.planet.name)}>
              <i className="fa-regular fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
