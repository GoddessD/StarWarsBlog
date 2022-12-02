import React,{useContext} from "react";
import { useParams } from "react-router";
import {Context} from "../store/appContext"
export const DetailedPeople = () => {
  const params = useParams()
  const {store,actions} = useContext(Context)
 const character = store.people.filter((item,index) =>index == params['index'])[0]
    return (
    <div>
      <div>
        <div>
          <img />
        </div>
        <div>
          <h3>{character.name}</h3>
          <p> </p>
        </div>
      </div>

      <div>
        <div>
          <h6></h6>
          <p> </p>
        </div>
        <div>
          <h6></h6>
          <p> </p>
        </div>
        <div>
          <h6></h6>
          <p> </p>
        </div>
        <div>
          <h6></h6>
          <p> </p>
        </div>
        <div>
          <h6></h6>
          <p> </p>
        </div>
        <div>
          <h6></h6>
          <p> </p>
        </div>
      </div>
    </div>
  );
};
