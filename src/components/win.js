import React from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

const Win = () => {
const { width, height } = useWindowSize();

  return (
    <>
    <Confetti
      width={width}
      height={height}>
    </Confetti>
    </>
  );
};

export default Win;
