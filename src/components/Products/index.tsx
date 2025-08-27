import { Tabs, TabsProps } from "antd";
import React from "react";
import { ContentSection, TabContent } from "./styles";
import { TabOne } from "./tab-one";
import { Fade } from "react-awesome-reveal";

const Products: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Cold Shrink Tubes",
      children: <TabOne />,
    },
    {
      key: "2",
      label: "Heat Shrink Tubes",
      children: "Content of Tab Pane 2",
    },
  ];

  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <ContentSection>
      <Fade direction={"up"} triggerOnce>
        <h2>Our Products</h2>
        <TabContent>
          <Tabs
            defaultActiveKey="1"
            items={items}
            onChange={onChange}
            tabBarStyle={{ fontWeight: "bold" }}
          />
        </TabContent>
      </Fade>
    </ContentSection>
  );
};
export default Products;
