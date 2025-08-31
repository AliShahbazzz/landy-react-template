import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const TabContent = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const TabContainer = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .ant-card-meta-title {
    font-weight: bold;
  }
`;
