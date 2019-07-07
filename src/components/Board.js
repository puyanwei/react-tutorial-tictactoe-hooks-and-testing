import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
    const [squaresValues, setSquaresValues] = useState(Array(9).fill(null));
    const [xIsNext, setxIsNext] = useState(true);

    const renderSquare = i => (
        <Square value={squaresValues[i]} handleClick={() => handleClick(i)} />
    );

    const handleClick = i => {
        const squaresValuesCopy = [...squaresValues];
        const symbol = xIsNext ? "X" : "O";
        squaresValuesCopy[i] = symbol;
        setSquaresValues(squaresValuesCopy);
        setxIsNext(!xIsNext);
    };

    const symbol = xIsNext ? "X" : "O";
    const status = `Next player: ${symbol}`;

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
};

export default Board;
