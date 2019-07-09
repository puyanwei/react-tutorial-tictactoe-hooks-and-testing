import { render } from "@testing-library/react";
import React from "react";

import Game from "../components/Game";

describe("Game.js", () => {
    it("renders the containers with classes game and game board", () => {
        const { container, debug } = render(<Game />);
        expect(container.firstChild.classList.contains("game")).toBe(true);
        expect(
            container.firstChild.firstChild.classList.contains("game-board")
        ).toBe(true);
    });
});
