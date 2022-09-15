import React from "react";
import styled from "styled-components";
import Maintenance from "../assets/underconstruction.jpg";

const MoviesTab = styled.div`
  background: url(${Maintenance});
  background-color: transparent;
  height: 80.7vh;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export default function Movies() {
  return (
    <MoviesTab>
      <></>
    </MoviesTab>
  );
}
