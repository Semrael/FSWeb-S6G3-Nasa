import React from "react";
import Img from "./Img";
import Details from "./Details";
import Video from "./Video";

const ApodData = (props) => {
  const { apodData } = props;
  return (
    <div className="ApodData">
      {apodData.media_type == "image" ? (
        <Img url={apodData.hdurl} />
      ) : (
        <Video url={apodData.url} />
      )}
      <Details apodData={apodData} />
    </div>
  );
};

export default ApodData;
