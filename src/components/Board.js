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
        if (calculateWinner(squaresValuesCopy) || squaresValuesCopy[i]) {
            return;
        }
        const symbol = xIsNext ? "X" : "O";
        squaresValuesCopy[i] = symbol;
        setSquaresValues(squaresValuesCopy);
        setxIsNext(!xIsNext);
    };

    const calculateWinner = squares => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    };

    let status;

    const winner = calculateWinner(squaresValues);

    status = winner
        ? `Winner: ${winner}`
        : `Next player: ${xIsNext ? "X" : "O"}`;

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
