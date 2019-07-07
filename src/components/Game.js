import React from "react";
import Board from "./Board";

const Game = () => {
    return (
        <div className="game">
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
            <div className="game-board">
                <Board />
            </div>
        </div>
    );
};

export default Game;
