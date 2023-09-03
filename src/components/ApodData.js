import React from "react";
import Img from "./Img";
import Details from "./Details";
import Video from "./Video";
import styled from "styled-components";

const ApodData = (props) => {
  const { apodData } = props;

  //styled-components
  const ApodDiv = styled.div`
    text-align: center;
    width: 50%;
    height: 1400px;
    margin: auto;
    padding: 3%;
    border: 2px solid black;
    border-radius: 20px;
    background-color: rgb(176, 135, 106);
    &:hover {
      color: 2px solid yellow;
    }
  `;
  return (
    <ApodDiv>
      {apodData.media_type == "image" ? (
        <Img url={apodData.hdurl} />
      ) : (
        <Video url={apodData.url} />
      )}
      <Details apodData={apodData} />
    </ApodDiv>
  );
};

export default ApodData;
