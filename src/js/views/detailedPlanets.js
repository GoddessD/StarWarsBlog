import React,{useContext} from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
export const DetailedPlanets = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const planet = store.planets.filter(
    (item, index) => index == params.index
  )[0];
  return (
    // <div>
    //   <button onClick={()=>console.log(character)}> click me</button>
    //   {planet.name}
    // </div>
    <div>
      <div className="d-flex border-bottom text-center">
        <img
          className="w-50"
          src={"https://loremflickr.com/800/600/" + planet.name}
        />

        <div>
          <h1>{planet.name}</h1>
          <p className="fs-4">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            magna enim, blandit nec tincidunt eu, euismod quis purus. Vestibulum
            efficitur tempor molestie. Vivamus in eros neque. Vivamus ac est sed
            augue malesuada semper. Sed congue odio nec mi pulvinar, ac tempor
            massa sollicitudin. Fusce et tellus non massa finibus faucibus.
            Etiam fermentum lectus ligula, sed vehicula sem tincidunt non.
            Praesent lobortis gravida nibh et maximus.{" "}
          </p>
        </div>
      </div>

      <div className="row text-center text-danger">
        <div className="col border-end">
          <h3>Diameter</h3>
          <p className="fs-5">{planet.diameter}</p>
        </div>
        <div className="col border-end">
          <h3>Climate</h3>
          <p className="fs-5">{planet.climate} </p>
        </div>
        <div className="col border-end">
          <h3>Terrain</h3>
          <p className="fs-5">{planet.terrain}</p>
        </div>
        <div className="col border-end">
          <h3>Population</h3>
          <p className="fs-5">{planet.population} </p>
        </div>
        <div className="col">
          <h3>Orbital Period</h3>
          <p className="fs-5">{planet.orbital_period} </p>
        </div>
      </div>
    </div>
  );
};
//
