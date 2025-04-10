import React from "react";
import "./RowInfoStyle.css"
import CardInfo from "./CardInfo.jsx";

const RowInfo = ({ list ,title,singleRoute}) => {
  return (
    <div className="container-fluid bg-primary d-flex align-items-center flex-column gap-3 py-2 my-2">
      <h2 className="bg-success w-100 text-start">{title}</h2>
      <div className="container-fluid bg-primary p-0 d-flex align-items-center flex-row overflow-x-scroll gap-2">
        {list?.map((elem) => (
          <CardInfo key={elem.uid} id={elem.uid} name={elem.name} singleRoute={singleRoute}/>
        ))}
 
      </div>
    </div>
  );
};

export default RowInfo