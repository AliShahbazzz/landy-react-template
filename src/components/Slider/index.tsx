import React from "react";
import { ContentSection } from "./styles";
import { Fade } from "react-awesome-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider: React.FC<{ direction: "up" }> = ({ direction }) => {
  {
    /* <div>
          <img
            src={`${process.env.PUBLIC_URL}/img/slider/banner2.png`}
            alt=""
          />
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/img/slider/banner3.png`}
            alt=""
          />
        </div> */
  }

  return (
    <ContentSection>
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {/*//@ts-ignore} */}
        <img src={`${process.env.PUBLIC_URL}/img/slider/banner1.png`} alt="" />
      </Carousel>
    </ContentSection>
  );
};

export default Slider;
