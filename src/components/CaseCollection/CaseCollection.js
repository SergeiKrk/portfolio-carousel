import React from "react";
import "./../CaseCollection/Collection.css";

function Collection({ images }) {
  return (
    <div className="collection">
      <img className="collectionBig" src={images[0]} alt="Item" />
      <div className="collectionBottom">
        <img className="collectionMini" src={images[1]} alt="Item" />
        <img className="collectionMini" src={images[2]} alt="Item" />
        <img className="collectionMini" src={images[3]} alt="Item" />
      </div>
    </div>
  );
}

function CaseCollection() {
  return (
    <div className="CaseCollection">
      <div className="content">
        <Collection
          images={[
            "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1560840067-ddcaeb7831d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1531219572328-a0171b4448a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
            "https://images.unsplash.com/photo-1573108724029-4c46571d6490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNpdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          ]}
        />
      </div>
    </div>
  );
}

export default CaseCollection;
