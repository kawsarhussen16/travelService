import React from "react";
import styled from "styled-components";
import QueryBuilderSharpIcon from "@material-ui/icons/QueryBuilderSharp";
import LocalOfferOutlinedIcon from "@material-ui/icons/LocalOfferOutlined";
const Overview = ({ overview }) => {
  return (
    <OverviewContainer>
      {overview !== null ? (
        <>
          <OverviewTop>
            <Container>
              <ContainerItem>
                <LocalOfferOutlinedIcon
                  className="icon rotated"
                  fontSize="large"
                  color="secondary"
                />
              </ContainerItem>
              <ContainerItem>
                <p className="key_item">Price</p>
                <p className="key_value">
                  <span className="key_value_item">${overview.price}</span>
                </p>
              </ContainerItem>
            </Container>
            <Container>
              <ContainerItem>
                <QueryBuilderSharpIcon
                  className="icon"
                  fontSize="large"
                  color="secondary"
                />
              </ContainerItem>
              <ContainerItem>
                <p className="key_item">Duration</p>
                <p className="key_value">
                  <span className="key_value_item">{overview.duration}</span>
                  hours
                </p>
              </ContainerItem>
            </Container>
          </OverviewTop>
          <div>{overview.description}</div>
        </>
      ) : (
        "<div>Loading...</div>"
      )}
    </OverviewContainer>
  );
};

export default Overview;

const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  min-height: 20vh;
  margin-bottom: 80px;
`;
const OverviewTop = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;
const ContainerItem = styled.div`
  margin: 20px 20px 20px 0;
  .icon {
    padding: 5px;
    background: lightgrey;
    border-radius: 5px;
  }
  .icon.rotated {
    transform: rotate(90deg);
  }
  .key_item {
    color: grey;
    text-transform: uppercase;
    font-size: 10px;
  }
  .key_value_item {
    margin-right: 3px;
    font-size: 20px;
  }
  .key_value {
    font-weight: bold;
  }
`;
