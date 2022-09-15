import React, { useState, useEffect } from "react";
import * as S from "../Styles/HarryStyle.js";

export default function Harry() {
  const [harry, setHarry] = useState([]);
  const [house, setHouse] = useState("");
  const api =
    house === ""
      ? "https://hp-api.herokuapp.com/api/characters"
      : `https://hp-api.herokuapp.com/api/characters/${house}`;
  useEffect(() => {
    async function fetchData() {
      const data = await fetch(api);
      const result = await data.json();
      setHarry(result);
    }
    fetchData();
  }, [harry, api]);

  function reset(e) {
    setHouse("");
  }

  function handleClick(e) {
    setHouse(`house/${e.target.value}`);
  }

  return (
    <S.YearBook>
      <h2>Choose a Hogwarts House</h2>
      <S.Houses>
        <S.Gryf onClick={handleClick} value="Gryffindor">
          Gryffindor
        </S.Gryf>
        <S.Sly onClick={handleClick} value="Slytherin">
          Slytherin
        </S.Sly>
        <S.Huff onClick={handleClick} value="Hufflepuff">
          Hufflepuff
        </S.Huff>
        <S.Raven onClick={handleClick} value="Ravenclaw">
          Ravenclaw
        </S.Raven>
        <S.All onClick={reset} value="All">
          All
        </S.All>
      </S.Houses>
      <S.Div>
        {harry.map((item) => (
          <ul key={item.id}>
            <S.Figure>
              <img src={item.image} alt={item.name} />
            </S.Figure>
            <li>Name: {item.name}</li>
            <li>Played by:{item.actor}</li>
            <li>Species: {item.species}</li>
            <li>Gender: {item.gender}</li>
            <li>House: {item.house}</li>
            <li>Birth: {item.dateOfBirth}</li>
            <li>Ancestry: {item.ancestry}</li>
            <li>Eye-Colour:{item.eyeColour}</li>
            <li>Hair-Colour: {item.hairColour}</li>
            <li>
              Wand ━☆ﾟ: Wood: {item.wand.wood}, Core: {item.wand.core}, Lenght:
              {item.wand.length}
            </li>
            <li>Patronus: {item.patronus}</li>
          </ul>
        ))}
      </S.Div>
    </S.YearBook>
  );
}
