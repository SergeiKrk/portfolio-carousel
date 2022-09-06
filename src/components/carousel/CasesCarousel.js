import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CasesCarousel.css";
import Grid from "@mui/system/Unstable_Grid";
import CaseCollection from "../CaseCollection/CaseCollection";

const CasesCarousel = () => {
  const casesData = [
    {
      id: 0,
      title: "Строительство домов",
      description:
        "Разработали с нуля двухэкранный квиз-сайт в уникальном дизайне. Настроена контекстная реклама в Яндекс Директ. Сроки реализации 5 дней",
      conversion: "6",
      leadPrice: "480",
      link: "higina-home.com",
      img1:
        "https://higina-home.com/wp-content/uploads/2022/05/be56bdcfde42e850420a57942f135c63.jpg",
      img2:
        "https://higina-home.com/wp-content/uploads/2022/05/ef3f609d4ca36499a23d775c4ac0a637.jpg",
      img3:
        "https://higina-home.com/wp-content/uploads/2022/05/cadd298f3846fc3055a6d1a1f682c32b.jpg",
      img4:
        "https://higina-home.com/wp-content/uploads/2022/05/be56bdcfde42e850420a57942f135c63.jpg",
    },
    {
      id: 1,
      title: "Септики",
      description:
        "Разработали с нуля двухэкранный квиз-сайт в уникальном дизайне. Настроена контекстная реклама в Яндекс Директ. Сроки реализации 5 дней",
      conversion: "9",
      leadPrice: "380",
      link: "склад-септиков.рф",
      img1:
        "https://керамоподбор.рф/wp-content/uploads/2021/12/IMG-20191007-WA0003.jpg",
      img2:
        "https://керамоподбор.рф/wp-content/uploads/2021/12/IMG-20211228-WA0011.jpg",
      img3:
        "https://керамоподбор.рф/wp-content/uploads/2021/12/IMG-20191007-WA0004.jpg",
      img4:
        "https://керамоподбор.рф/wp-content/uploads/2022/01/IMG-20191007-WA0005.jpg",
    },
    {
      id: 2,
      title: "Кухни на заказ",
      description:
        "Разработали с нуля двухэкранный квиз-сайт в уникальном дизайне. С точки зрения маркетинга составленны вопросы и ответы. Настроена контекстная реклама в Яндекс Директ. Сроки реализации 4 дня",
      conversion: "10",
      leadPrice: "800",
      link: "kitchen4u.ru",
      img1: "https://jpimport.ru/wp-content/uploads/2021/11/3.jpg",
      img2: "https://jpimport.ru/wp-content/uploads/2021/11/2.jpg",
      img3: "https://jpimport.ru/wp-content/uploads/2021/11/3.jpg",
      img4: "https://jpimport.ru/wp-content/uploads/2021/11/5.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };

  return (
    <>
      <h2 className="center">Примеры наших квиз-лендингов</h2>
      <Slider {...settings}>
        {casesData.map((cas, index) => (
          <div key={index}>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid xs={12} md={7}>
                <CaseCollection
                  img1={cas.img1}
                  img2={cas.img2}
                  img3={cas.img3}
                  img4={cas.img4}
                />
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
    </>
  );
};

export default CasesCarousel;
