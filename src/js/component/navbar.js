import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const FavoriteItem=({name,id,singleRoute,delFnc})=>{
  const navigate=useNavigate()
  return(
    <li className="d-flex align-items-center flex-row px-2">
         <button onClick={()=>navigate(`/${singleRoute}/${id}`)} className="dropdown-item" type="button">
                {name}
              </button>
      <i onClick={()=>delFnc(id)} className="fa-solid fa-trash"></i> 
    </li>
  )
}

export const Navbar = () => {
  const {store,actions}=useGlobalContext()
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">React Boilerplate</span>
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
              store.favorites.map((elem)=>(
                <FavoriteItem key={elem.id} {...elem} delFnc={actions.deleteToFavorites}/>
              ))
            }

          </ul>
        </div>
      </div>
    </nav>
  );
};
