import React from "react";
import { useNavigate } from "react-router";
import "./CardInfoStyles.css"
import {useGlobalContext} from "../store/appContext"


const CardInfo=({name,id,singleRoute})=>{
    const{store,actions:{addToFavorites}}=useGlobalContext()
    const isAddedtoFavorites=!!store.favorites.find((elem)=>elem.id===id+name)
    const navigate=useNavigate()
    return(

        <div className="card m-0" style={{minWidth: "18rem"}}>
  <img src="https://placehold.co/600x400" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <div className="d-flex w-100 align-items-center  justify-content-between">
    <button onClick={()=>navigate(`/${singleRoute}/${id}`)} className="btn btn-primary">Learn More</button>
    <button onClick={()=>addToFavorites({
        name,id:`${id}${name}`,singleRoute
    })}  className={`btn ${isAddedtoFavorites ? "favoriteStyle" :"hoverStyle" } `}>
    <i className="fa-solid fa-heart"></i>
    </button>
    </div>
    
  </div>
</div>
    )
}

export default CardInfo