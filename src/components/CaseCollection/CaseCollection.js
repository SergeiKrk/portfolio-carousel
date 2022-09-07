import React, { useState } from "react";
import "./../CaseCollection/Collection.css";
import data from "../../data/images.json";
import Modal from "../Modal/Modal";
import "../Modal/mod.css";

function CaseCollection(props) {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.images[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.images.filter((item) => {
      return data.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.images[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.images.filter((item) => {
      return data.images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  return (
    // <div className="CaseCollection">
    //   <div className="content">
    //     <div className="collection">
    //       <img className="collectionBig" src={props.img1} alt="" />
    //       <div className="collectionBottom">
    //         <img className="collectionMini" src={props.img2} alt="" />
    //         <img className="collectionMini" src={props.img3} alt="" />
    //         <img className="collectionMini" src={props.img4} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="CaseCollection">
        <div className="content">
          <div className="collection">
            <img className="collectionBig" src={props.img1} alt="" />
            <div className="collectionBottom">
              {data.images.map((item, index) => (
                <img
                  key={index}
                  className="collectionMini"
                  src={item.link}
                  alt={item.text}
                  onClick={() => handleClick(item, index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </>
  );
}

export default CaseCollection;
