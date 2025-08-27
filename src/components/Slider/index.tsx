import React from "react";
import { ContentSection } from "./styles";
import { Fade } from "react-awesome-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider: React.FC<{ direction: "up" }> = ({ direction }) => {
  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
          <div>
            <img src="/img/slider/banner1.png" alt="" />
          </div>
          <div>
            <img src="/img/slider/banner2.png" alt="" />
          </div>
          <div>
            <img src="/img/slider/banner3.png" alt="" />
          </div>
        </Carousel>
      </Fade>
    </ContentSection>
  );
};

export default Slider;
