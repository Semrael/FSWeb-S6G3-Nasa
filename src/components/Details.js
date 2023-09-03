import React from "react";
import styled from "styled-components";

const Details = (props) => {
  const { title, date, copyright, explanation, media_type } = props.apodData;
  const H2 = styled.h1`
    font-family: helvatica;
    color: ${(props) => (props.type === "image" ? "darkblue" : "brown")};
    &:hover {
      color: red;
    }
  `;

  return (
    <div>
      <H2 type={media_type}>{title}</H2>
      <div className="detail-row">
        <p>{date}</p>
        <p>{copyright}</p>
      </div>
      <p>{explanation}</p>
    </div>
  );
};

export default Details;
