import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
export const DetailedPeople = () => {
  const params = useParams();
  const { store, actions } = useContext(Context);
  const character = store.people.filter(
    (item, index) => index == params.index
  )[0];
  return (
    // <div>
    //   <button onClick={()=>console.log(character)}> click me</button>
    //   {character.name}
    // </div>
    <div>
      <div className="d-flex border-bottom text-center">
        
          <img className="w-50" src={"https://loremflickr.com/800/600/" + character.name} />
        
        <div>
          <h1>{character.name}</h1>
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
          <h3>Birth Year</h3>
          <p className="fs-5">{character.birth_year}</p>
        </div>
        <div className="col border-end">
          <h3>Gender</h3>
          <p className="fs-5">{character.gender} </p>
        </div>
        <div className="col border-end">
          <h3>Height</h3>
          <p className="fs-5">{character.height}</p>
        </div>
        <div className="col border-end">
          <h3>Skin Color</h3>
          <p className="fs-5">{character.skin_color} </p>
        </div>
        <div className="col">
          <h3>Eye Color</h3>
          <p className="fs-5">{character.eye_color} </p>
        </div>
      </div>
    </div>
  );
};
//
