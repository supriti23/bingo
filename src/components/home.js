import React, { useState } from "react";
import "./home.scss";
import BingoTable from "./Bingo/bingo";
const HomePage = () => {
  const [start, setStart] = useState(false);
  function startHandler() {
    setStart(true);
  }
  return (
    <>
            {start ? (
              <BingoTable />
            ) : (
              <div id="play" className="container-fluid">
                <center>
                  <button
                    type="button"
                    className="btn btn-lg btn-primary"
                    onClick={() => startHandler()}
                  >
                    Let's Play
                  </button>
                </center>
              </div>
            )}
    </>
  );
};
export default HomePage;
