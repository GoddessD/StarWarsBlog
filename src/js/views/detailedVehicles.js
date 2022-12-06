import React from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext"
export const DetailedVehicles = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const vehicles = store.vehicle.filter(
    (item, index) => index == params.index
  )[0];
  return (
    // <div>
    //   <button onClick={()=>console.log(character)}> click me</button>
    //   {vehicle.name}
    // </div>
    <div>
      <div className="d-flex border-bottom text-center">
        <img
          className="w-50"
          src={"https://loremflickr.com/800/600/" + vehicles.name}
        />

        <div>
          <h1>{vehicle.name}</h1>
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
          <h3>Vehicle Model</h3>
          <p className="fs-5">{vehicle.model}</p>
        </div>
        <div className="col border-end">
          <h3>Cost in Credits</h3>
          <p className="fs-5">{vehicle.cost_in_credits} </p>
        </div>
        <div className="col border-end">
          <h3>Length</h3>
          <p className="fs-5">{vehicle.length}</p>
        </div>
        <div className="col border-end">
          <h3>Cargo Capacity</h3>
          <p className="fs-5">{vehicle.cargo_capacity} </p>
        </div>
        <div className="col">
          <h3>Vehicle Class</h3>
          <p className="fs-5">{vehicle.vehicle_class} </p>
        </div>
      </div>
    </div>
  );
};
//
