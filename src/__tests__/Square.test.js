import { render } from "@testing-library/react";
import "jest-dom/extend-expect";

import React from "react";
import Square from "../components/Square";

const handleClick = jest.fn();

let value;
let squareButton;

describe("Square.js", () => {
    it("renders the button with an X", () => {
        value = "X";
        const { getByText } = render(
            <Square handleClick={handleClick} value={value} />
        );

        const button = getByText(/X/);
        // expect(button).toHaveAttribute("button");
        expect(button).toBeTruthy();
    });
    it("renders the button with an O", () => {
        value = "O";
        const { getByText } = render(
            <Square handleClick={handleClick} value={value} />
        );
        const button = getByText(/O/);
        // expect(button).toHaveAttribute("button");
        expect(button).toBeTruthy();
    });
});
