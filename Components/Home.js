import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Movies.js";
import Harry from "./Harry.js";
import * as S from "../Styles/HomeStyle.js";

export default function Home() {
  return (
    <S.divRouter>
      <BrowserRouter>
        <S.Title>Welcome to the Harry potter world!</S.Title>
        <div>
          <S.Nav>
            <ul>
              <li>
                <S.Linker to="/Home">Home</S.Linker>
              </li>
              <li>
                <S.Linker to="/Characters">Characters</S.Linker>
              </li>
              <li>
                <S.Linker to="/Movies">Movies</S.Linker>
              </li>
            </ul>
          </S.Nav>
        </div>
        <Routes>
          <Route path="/Home" />
          <Route path="/Characters" element={<Harry />} />
          <Route path="/Movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </S.divRouter>
  );
}
