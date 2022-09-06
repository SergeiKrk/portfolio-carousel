import React from "react";
import "./../CaseCollection/Collection.css";

function CaseCollection(props) {
  return (
    <div className="CaseCollection">
      <div className="content">
        <div className="collection">
          <img className="collectionBig" src={props.img1} alt="" />
          <div className="collectionBottom">
            <img className="collectionMini" src={props.img2} alt="" />
            <img className="collectionMini" src={props.img3} alt="" />
            <img className="collectionMini" src={props.img4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseCollection;
