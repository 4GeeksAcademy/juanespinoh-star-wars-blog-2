import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../store/appContext";
import { useNavigate } from "react-router-dom";



const FavoriteItem=({name,id,singleRoute,delFnc})=>{
  const navigate=useNavigate()

  const idNumberSeparator=(string)=>{
    // let dig2=isNaN(Number(string[1]))
   
    if(!isNaN(Number(string[1]))){
      return (`${string[0]}${Number(string[1])}`)
    }else{
      return `${string[0]}`
    }
  }
  
  return(
    <li className="d-flex align-items-center flex-row px-2 bg">
         <button onClick={()=>navigate(`/${singleRoute}/${idNumberSeparator(id)}`)} className="dropdown-item" type="button">
                {name}
              </button>
      <i onClick={()=>delFnc(id)} className="fa-solid fa-trash"></i> 
    </li>
  )
}

export const Navbar = () => {
  const {store,actions}=useGlobalContext()
  return (
    <nav className="navbar navbar-light border-bottom border-2 border-white bg-black mb-2">
      <Link className="text-decoration-none" to="/">
        <span className="navbar-brand text-white mb-0 h1">Star Wars Blog</span>
      </Link>
      <div className="ml-auto">
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-primary dropdown-toggle"
            data-bs-toggle="dropdown"
            data-bs-display="static"
            aria-expanded="false"
          >
            Favorities <span className="badge text-bg-secondary">{store.favorites.length}</span>
          </button>

          <ul className="dropdown-menu dropdown-menu-lg-end">
            
            {
              store.favorites.length !== 0 ?
              store.favorites.map((elem)=>(
                <FavoriteItem key={elem.id} {...elem} delFnc={actions.deleteToFavorites}/>
              ))
              :
              <div className="text-center">
                Empty
              </div>
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};
