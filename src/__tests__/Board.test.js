import { render, fireEvent } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import React from "react";

import Board from "../components/Board";
import Square from "../components/Square";

/*
What behaviors are there?

- Clicking a square will call handleClick
- Clicking a square will call calculateWinner
- Make calculateWinner return no win
- Make calculateWinner return a win
- Clicking the square once will show O
- Clicking the square twice will show X
- Test that the status is toggles when clicking a square
- Test that once won, nothing is clickable
- Test that the once won, the text displays 
*/
describe("Board.js", () => {
    it("clicking the first square adds an 'X' to the button", () => {
        render(<Board />);

        const squareOne = document.getElementsByClassName("square")[0];

        fireEvent.click(squareOne);
        expect(squareOne.innerHTML).toEqual("X");
    });
    it("clicking the first and second squares adds an 'X' and 'O' to the first two buttons", () => {
        render(<Board />);

        const squareOne = document.getElementsByClassName("square")[0];
        const squareTwo = document.getElementsByClassName("square")[1];

        fireEvent.click(squareOne);
        fireEvent.click(squareTwo);

        expect(squareOne.innerHTML).toEqual("X");
        expect(squareTwo.innerHTML).toEqual("O");
    });
    it("clicking the first and second squares will toggle the text for what the next players symbol is", () => {
        render(<Board />);
        const status = document.getElementsByClassName("status")[0];
        const squareOne = document.getElementsByClassName("square")[0];
        const squareTwo = document.getElementsByClassName("square")[1];

        expect(status.innerHTML).toEqual("Next player: X");
        fireEvent.click(squareOne);
        expect(status.innerHTML).toEqual("Next player: O");
        fireEvent.click(squareTwo);
        expect(status.innerHTML).toEqual("Next player: X");
    });
});
