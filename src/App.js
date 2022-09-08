import React, { useState } from "react";
import Slider from "react-slick";
import "./components/CaseCollection/Collection.css";
import "./App.css";
import data from "./data/dataCases.json";
import Modal from "./components/Modal/Modal";
import "./components/Modal/mod.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Grid from "@mui/system/Unstable_Grid";

function App() {
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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <div className="App">
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
                      />
                      {console.log(data.casesData.image)}
                      <div className="collectionBottom">
                        {/* {data.casesData.map((item, index) => (
                          <img
                            key={index}
                            className="collectionMini"
                            src={item.image.link}
                            alt={item.image.alt}
                            onClick={() => handleClick(item, index)}
                          />
                        ))} */}
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
      {/* <CasesCarousel /> */}
      {/* <Mod /> */}

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

export default App;
