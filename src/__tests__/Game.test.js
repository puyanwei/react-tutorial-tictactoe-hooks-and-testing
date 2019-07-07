import { render } from "@testing-library/react";
import React from "react";
import Game from "../components/Game";

describe("Game.js", () => {
    it("testng works", () => {
        const { container } = render(<Game />);
        expect(true).toBe(true);
    });
});
