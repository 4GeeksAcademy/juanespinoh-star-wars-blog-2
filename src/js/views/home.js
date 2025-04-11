import React,{useEffect} from "react";
import "../../styles/home.css";
import RowInfo from "../component/RowInfo.jsx";
import { useGlobalContext } from "../store/appContext.js";

export const Home = () => {
  const { store, actions } = useGlobalContext();


  useEffect(()=>{
	actions.fetchCharacters()
	actions.fetchPlanets()
	actions.fetchVehicles()
  },[])

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="container-fluid text-white bg-black d-flex justify-content-center align-items-center flex-column"
    >
			
			<RowInfo list={store.chracterList} title={"Characters"} singleRoute={"character"}/>
			<RowInfo list={store.planetsList} title={"Planets"} singleRoute={"planet"}/>
			<RowInfo list={store.vehiclesList} title={"Vehicles"} singleRoute={"vehicle"}/>
    </div>
  );
};
