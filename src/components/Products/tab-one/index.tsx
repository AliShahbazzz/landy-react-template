import React from "react";
import { Card, Col, Row } from "antd";
import { TabContainer } from "../styles";
import Meta from "antd/lib/card/Meta";

export const TabOne: React.FC = () => {
  const products = [
    {
      title: "Cold Shrink Tube",
      description: "Cold Shrinkable tube made of EPDM",
      img: "/img/products/product_1.png",
      alt: "Cold Shrink Tube",
    },
    {
      title: "Cold Shrink Tube with Mastic",
      description: "Cold Shrinkable tube made of Silicone Rubber",
      img: "/img/products/product_2.png",
      alt: "Cold Shrink Tube with Mastic",
    },
    {
      title: "Cold Shrink Breakout Boot",
      description: "Cold Shrink Breakouts Made Of Silicone Rubber",
      img: "/img/products/product_3.png",
      alt: "Cold Shrink Breakout Boot",
    },
    {
      title: "Cold Shrink Terminal Kit",
      description: "Cold Shrink Indoor/Outdoor Termination for XLPE or EPR",
      img: "/img/products/product_4.png",
      alt: "Cold Shrink Terminal Kit",
    },
    {
      title: "Wire Expanding Machine",
      description:
        "Applied for expanding small diameter 5-10mm Cold Shrink Rubber products",
      img: "/img/products/product_5.jpg",
      alt: "Wire Expanding Machine",
    },
    {
      title: "Spiral Winding Machine",
      description: "Applied for plastic removable support tube manufacturing",
      img: "/img/products/product_6.png",
      alt: "Spiral Winding Machine",
    },
    {
      title: "Spiraling Strips by Welding Type",
      description:
        "PP/PE strips: for spiraling different diameters supporting tubes",
      img: "/img/products/product_7.png",
      alt: "Spiraling Strips by Welding Type",
    },
    {
      title: "Flexible Silicone Sleeve",
      description: "High-quality Silicone, Explosion-proof and Pressure-relief ",
      img: "/img/products/product_8.jpg",
      alt: "Flexible Silicone Sleeve",
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
        <div style={{ width: "100%", height: 280, overflow: "hidden" }}>
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
