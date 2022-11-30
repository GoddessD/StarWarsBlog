import React,{useContext} from "react";
import {Context} from "../store/appContext"
import { People } from "../component/people.js";
import { Planets } from "../component/planets.js";
import { Vehicles } from "../component/vehicles.js";
import "../../styles/home.css";

export const Home = () => {
  const {store,actions} = useContext(Context)
  return(
  <div className="text-center mt-5">
    <div className="mb-5">
      <h2 className="text-danger text-start"> People</h2>
      <div className="row datascroll">
       {store.people.map((item,index)=>(<People character={item} index={index} addToFavorites={actions.addToFavorites}/>))}
      </div>
    </div>

    <div className="mb-5">
      <h2 className="text-danger text-start"> Planets</h2>
      <div className="row datascroll">
      {store.planets.map((item,index)=>(<Planets planet={item} index={index} addToFavorites={actions.addToFavorites}/>))}
      </div>
    </div>

    <div className="mb-5">
      <h2 className="text-danger text-start"> Vehicles</h2>
      <div className="row datascroll">
      {store.vehicles.map((item,index)=>(<Vehicles vehicle={item} index={index} addToFavorites={actions.addToFavorites} />))}
      </div>
    </div>
  </div>
);
}