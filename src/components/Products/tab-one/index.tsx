import React from "react";
import { Card, Col, Row } from "antd";
import { TabContainer } from "../styles";
import Meta from "antd/lib/card/Meta";

export const TabOne: React.FC = () => {
  const products = [
    {
      title: "Cold Shrink Tube",
      description: "This is the description",
      img: "/img/products/cold_shrink_tubes_1.png",
      alt: "Cold Shrink Tube",
    },
    {
      title: "Cold Shrink Tube with Mastic",
      description: "This is the description",
      img: "/img/products/cold_shrink_tubes_2.png",
      alt: "Cold Shrink Tube with Mastic",
    },
    {
      title: "Cold Shrink Breakout Boot",
      description: "This is the description",
      img: "/img/products/cold_shrink_tubes_3.png",
      alt: "Cold Shrink Breakout Boot",
    },
    {
      title: "Cold Shrink Terminal Kit",
      description: "This is the description",
      img: "/img/products/cold_shrink_tubes_4.png",
      alt: "Cold Shrink Terminal Kit",
    },
  ];

  interface ProductCardProps {
    title: string;
    description: string;
    img: string;
    alt: string;
  }

  const ProductCard: React.FC<ProductCardProps> = ({
    title,
    description,
    img,
    alt,
  }) => (
    <Card
      style={{ width: "100%", maxWidth: 450, margin: "0 auto" }}
      cover={
        <div style={{ width: "100%", height: 250, overflow: "hidden" }}>
          <img
            src={`${process.env.PUBLIC_URL}${img}`}
            alt={alt}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#f5f5f5", // filler behind transparent/short images
            }}
          />
        </div>
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );

  return (
    <TabContainer>
      <Row gutter={[16, 16]} justify="center">
        {products.map((product, index) => (
          <Col
            key={index}
            xs={24} // full width on mobile
            sm={24} // full width on small tablets
            md={12} // 2 per row on medium screens
            lg={12} // 2 per row on large screens
          >
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </TabContainer>
  );
};
