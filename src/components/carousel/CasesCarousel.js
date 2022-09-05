import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CasesCarousel.css";
import Grid from "@mui/system/Unstable_Grid";

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
        "https://quiz.paradigma.website/wp-content/uploads/2022/06/46888.jpeg",
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
        "https://quiz.paradigma.website/wp-content/uploads/2022/06/466464646464646.jpeg",
    },
    {
      id: 2,
      title: "Кухни на заказ",
      description:
        "Разработали с нуля двухэкранный квиз-сайт в уникальном дизайне. С точки зрения маркетинга составленны вопросы и ответы. Настроена контекстная реклама в Яндекс Директ. Сроки реализации 4 дня",
      conversion: "10",
      leadPrice: "800",
      link: "kitchen4u.ru",
      img1:
        "https://quiz.paradigma.website/wp-content/uploads/2022/03/quiz11-1122.jpg",
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
      <h2>Примеры наших квиз-лендингов</h2>
      <Slider {...settings}>
        {casesData.map((cas, index) => (
          <div key={index}>
            <Grid container spacing={2}>
              <Grid xs={12} md={7}>
                <img src={cas.img1} alt="{item.title}" />
              </Grid>
              <Grid xs={12} md={5}>
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
                    <p className="caseParam">{cas.leadPrice} руб.</p>
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
