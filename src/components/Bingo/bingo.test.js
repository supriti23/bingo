import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Bingo from "./bingo";

describe("Bingo component Testing", () => {
  test("On click event for Bingo elements", () => {
    const bingoComponent = render(<Bingo />);
    const bingoElement = bingoComponent.queryByText("Hello, hello?");
    fireEvent.click(bingoElement);
  });
});
