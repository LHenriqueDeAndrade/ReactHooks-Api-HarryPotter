import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";
import Magic from "../assets/Magic.png";

export const GlobalStyle = createGlobalStyle`
@font-face {font-family: "Harry Potter";
    src: url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.eot");
    src: url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.eot?#iefix") format("embedded-opentype"),
    url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.woff2") format("woff2"),
    url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.woff") format("woff"),
    url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.ttf") format("truetype"),
    url("//db.onlinewebfonts.com/t/0421d4186d6efbfc5331fe180895e780.svg#Harry Potter") format("svg");
}
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        font-family: Harry Potter, Arial;
        ::-webkit-scrollbar { 
        display: none; 
}
    }

`;

export const divRouter = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  background: url(${Magic});
  background-size: cover;
  background-attachment: fixed;
  overflow: auto;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 3em;
  background-image: linear-gradient(
    -225deg,
    brown 0%,
    yellow 29%,
    brown 67%,
    yellow 100%
  );
  background-size: auto auto;
  background-clip: border-box;
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: textclip 4s linear infinite;
  display: flex;
  justify-content: center;
  margin-top: 2vh;

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }

  @media only screen and (max-width: 600px) {
    font-size: 1.5em;
    margin-left: 7vw;
    letter-spacing: 2.88vw;
  }
`;

export const Linker = styled(Link)`
  list-style: none;
  color: brown;
  text-decoration: none;
  font-size: 2em;
  font-weight: bolder;
  transition: 0.8s ease-in-out;
  &:hover {
    cursor: pointer;
    color: gold;
  }
`;
