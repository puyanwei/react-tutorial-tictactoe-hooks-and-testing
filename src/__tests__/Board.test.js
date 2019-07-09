import { render, fireEvent } from "@testing-library/react";
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

        const firstSquare = document.getElementsByClassName("square")[0];

        fireEvent.click(firstSquare);
        expect(firstSquare.innerHTML).toEqual("X");
    });
    it("clicking the first and second squares adds an 'X' and 'O' to the first two buttons", () => {
        render(<Board />);

        const firstSquare = document.getElementsByClassName("square")[0];
        const secondSquare = document.getElementsByClassName("square")[1];

        fireEvent.click(firstSquare);
        fireEvent.click(secondSquare);

        expect(firstSquare.innerHTML).toEqual("X");
        expect(secondSquare.innerHTML).toEqual("O");
    });
});
