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
      style={{ width: 450 }}
      cover={
        <img
          width={450}
          height={380}
          alt={alt}
          src={`${process.env.PUBLIC_URL}${img}`}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );

  return (
    <TabContainer>
      <Row gutter={16} justify="center">
        {products?.slice(0, 2).map((product, index) => (
          <Col span={12} key={index}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
      <Row gutter={16} justify="center">
        {products?.slice(2, 4).map((product, index) => (
          <Col span={12} key={index}>
            <ProductCard {...product} />
          </Col>
        ))}
      </Row>
    </TabContainer>
  );
};
