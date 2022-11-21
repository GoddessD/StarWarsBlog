import React from "react";
import { People } from "../component/people.js";
import { Planets } from "../component/planets.js";
import { Vehicles } from "../component/vehicles.js";
import "../../styles/home.css";

const people = ["Luke Skywalker","Dark Vader","Princess Leia Organa","Chewbacca","Obi-Wan Kenobi","C-3PO","R2D2"]
const planets = ["Mustafar","Polis Massa","Hosnian Prime","Eadu","Geonosis","Mygeeto"]
const vehicles =["MILLENNIUM FALCON","DEATH STAR","AT-AT WALKER","X-WING FIGHTER"," IMPERIAL STAR DESTROYER","TIE FIGHTER"]
export const Home = () => (
  <div className="text-center mt-5">
    <div className="mb-5">
      <h2 className="text-danger text-start"> People</h2>
      <div className="row datascroll">
       {people.map((item,index)=>(<People item={item} index={index} />))}
      </div>
    </div>

    <div className="mb-5">
      <h2 className="text-danger text-start"> Planets</h2>
      <div className="row datascroll">
      {planets.map((item,index)=>(<Planets item={item} index={index} />))}
      </div>
    </div>

    <div className="mb-5">
      <h2 className="text-danger text-start"> Vehicles</h2>
      <div className="row datascroll">
      {vehicles.map((item,index)=>(<Vehicles item={item} index={index} />))}
      </div>
    </div>
  </div>
);
