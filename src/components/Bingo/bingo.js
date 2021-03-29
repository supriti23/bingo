import React, { useEffect, useState } from "react";
import "./bingo.scss";
import { bingoValues } from "../data";
import { shuffleValues } from "../data";
import { winCombinations } from "../data";
import freeElement from "../../assets/20711.jpg";
import Win from "../win";

const values = shuffleValues(bingoValues);

const Bingo = () => {
  const [selected, setSelected] = useState([12]);
  const [winValue, setWinValue] = useState(false)
  function clickCell(event) {
    let cell = parseInt(event.target.id);
    if (selected.indexOf(cell) === -1) {
      setSelected((prevState) => [...prevState, cell]);
      event.target.style.background =
        "linear-gradient(rgb(250, 253, 193), rgb(100, 229, 225))";
    }
  }

  const tableBody = () => {
    let content = [];
    let index = 0;
    for (let i = 0; i < 5; i++) {
      content.push(
        <div className="row justify-content-center" key={i}>
          <div
            className="col-2"
            key={index}
            id={index}
            onClick={(event) => clickCell(event)}
          >
            {values[index]}
          </div>
          <div
            className="col-2"
            key={index + 1}
            id={index + 1}
            onClick={(event) => clickCell(event)}
          >
            {values[index + 1]}
          </div>
          {i === 2 ? (
            <div
              className="freeElement col-2"
              key={index + 2}
              id={index + 1}
              style={{ backgroundImage: `url(${freeElement})` }}
            ></div>
          ) : (
            <div
              className="col-2"
              key={index + 2}
              id={index + 2}
              onClick={(event) => clickCell(event)}
            >
              {values[index + 2]}
            </div>
          )}
          <div
            className="col-2"
            key={index + 3}
            id={index + 3}
            onClick={(event) => clickCell(event)}
          >
            {values[index + 3]}
          </div>
          <div
            className="col-2"
            key={index + 4}
            id={index + 4}
            onClick={(event) => clickCell(event)}
          >
            {values[index + 4]}
          </div>
        </div>
      );
      index += 5;
    }
    return content;
  };

  useEffect(() => {
    if (selected.length >= 4) {
      let sortedArr = selected.sort((a, b) => a - b);
      let winSet = [];
      winCombinations.map((val, idx) => {
        let count = 0;
        for (let i = 0; i < val.length; i++) {
          if (sortedArr.indexOf(val[i]) >= 0) {
            count += 1;
            console.log(count);
          }
        }
        if (count >= 5) {
          winSet = val;
        }
        return winSet;
      });
      if (winSet.length === 5) {
        setWinValue(true);
        //alert("winner yayyyyy")
      }
      console.log(winValue)
    }
  },[selected,winValue]);
  return (
    <>
      <div className="container-fluid bingo col-12 ">
        {tableBody()}
      </div> 
      {winValue ? <Win /> : null}
    </>
  );
};
export default Bingo;
