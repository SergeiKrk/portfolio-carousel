import React, { useState } from "react";
import Grid from "@mui/system/Unstable_Grid";
import Modal from "./Modal";
import "./mod.css";
import "../CaseCollection/Collection.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data from "../../data/dataCases.json";

function Mod() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.link);
  };
  const handleBigImgClick = (cas, index) => {
    let item = cas.image[0];
    setCurrentIndex(index);
    setClickedImg(item.link);
  };

  const handelRotationRight = () => {
    const totalLength = data.casesData[0].image.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = data.casesData[0].image[0].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = data.casesData[0].image.filter((item) => {
      return data.casesData[0].image.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = data.casesData[0].image.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = data.casesData[0].image[totalLength - 1].link;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = data.casesData[0].image.filter((item) => {
      return data.casesData[0].image.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].link;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div className="Mod">
      <h2 className="center">Примеры наших квиз-лендингов</h2>
      <Slider {...settings}>
        {data.casesData.map((cas, index) => (
          <div key={index}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid xs={12} md={7}>
                <div className="CaseCollection">
                  <div className="content">
                    <div className="collection">
                      <img
                        className="collectionBig"
                        src={cas.image[0].link}
                        alt={cas.image[0].alt}
                        onClick={() => handleBigImgClick(cas, index)}
                      />
                      <div className="collectionBottom">
                        {cas.image.map((item, index) => (
                          <img
                            key={index}
                            className="collectionMini"
                            src={item.link}
                            alt={item.alt}
                            onClick={() => handleClick(item, index)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid xs={12} md={5} justifyContent="center">
                <h3 className="caseTitle">
                  {cas.title} ({cas.link})
                </h3>
                <p>Гео:</p>
                <p className="caseTitleDescript">Описание:</p>
                <p>{cas.description}</p>
                <Grid container spacing={3}>
                  <Grid xs={6} md={3}>
                    <p>Конверсия:</p>
                    <p className="caseParam">{cas.conversion}%</p>
                  </Grid>
                  <Grid xs={6} md={3}>
                    <p>Цена лида:</p>
                    <p className="caseParam">{cas.leadPrice} р.</p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        ))}
      </Slider>

      {clickedImg && (
        <Modal
          clickedImg={clickedImg}
          handelRotationRight={handelRotationRight}
          setClickedImg={setClickedImg}
          handelRotationLeft={handelRotationLeft}
        />
      )}
    </div>
  );
}

export default Mod;
