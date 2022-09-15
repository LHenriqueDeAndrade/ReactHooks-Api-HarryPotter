import styled from "styled-components";

export const YearBook = styled.section`
  background-color: transparent;
  button {
    width: 10%;
    margin-left: 1vw;
    cursor: pointer;
  }
  h2 {
    display: flex;
    justify-content: center;
    color: brown;
    font-size: 2em;
    margin-top: 2vh;
  }
  img {
    width: 20%;
  }
  li {
    font-size: 1.3em;
    color: silver;
    display: flex;
    justify-content: center;
    margin-top: 2vh;
  }
`;

export const Div = styled.div`
  background-color: transparent;
  margin-top: 4vh;
  margin-left: 3vw;
`;

export const Figure = styled.figure`
  display: flex;
  justify-content: center;
`;

export const Houses = styled.div`
  display: flex;
  width: 100%;
  height: 5vh;
  justify-content: center;
`;

export const Gryf = styled.button`
  background-color: #ae0001;
  color: white;
  border-radius: 6px;
  box-shadow: inset 0px 39px 0px -24px #740001;
`;

export const Sly = styled.button`
  background-color: #2a623d;
  color: white;
  border-radius: 6px;
  box-shadow: inset 0px 39px 0px -24px #1a472a;
`;

export const Raven = styled.button`
  background-color: #222f5b;
  color: white;
  border-radius: 6px;
  box-shadow: inset 0px 39px 0px -24px #0e1a40;
`;

export const Huff = styled.button`
  background-color: #f0c75e;
  color: white;
  border-radius: 6px;
  box-shadow: inset 0px 39px 0px -24px #ecb939;
`;

export const All = styled.button`
  background-color: grey;
  color: white;
  border-radius: 6px;
  box-shadow: inset 0px 39px 0px -24px darkgray;
`;
