import React from "react";
import "./../CaseCollection/Collection.css";

function Collection({ images }) {
  return (
    <div className="collection">
      <img className="collectionBig" src={images.img1} alt="Item" />
      <div className="collectionBottom">
        <img className="collectionMini" src={images.img2} alt="Item" />
        <img className="collectionMini" src={images.img3} alt="Item" />
        <img className="collectionMini" src={images.img4} alt="Item" />
      </div>
    </div>
  );
}

function CaseCollection(props) {
  return (
    <div className="CaseCollection">
      <div className="content">
        <Collection
          images={props.image}
        />
      </div>
    </div>
  );
}

export default CaseCollection;
