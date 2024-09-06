// src/component/Game.js
import React, { useState } from 'react'; 
import Board from './Board';



const generateBoard = (rows, cols, mineCount) => {
    // Create an empty board
    const board = Array.from({ length: rows }, () =>
        Array.from({ length: cols }, () => ({
            isMine: false,
            isRevealed: false,
            adjacentMines: 0,
        }))
    );

    // Place mines randomly
    let placedMines = 0;
    while (placedMines < mineCount) {
        const row = Math.floor(Math.random() * rows);
        const col = Math.floor(Math.random() * cols);
        if (!board[row][col].isMine) {
            board[row][col].isMine = true;
            placedMines++;
        }
    }

    // Calculate adjacent mines
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c].isMine) {
                for (let i = -1; i <= 1; i++) {
                    for (let j = -1; j <= 1; j++) {
                        const newRow = r + i;
                        const newCol = c + j;
                        if (newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols) {
                            board[newRow][newCol].adjacentMines++;
                        }
                    }
                }
            }
        }
    }

    return board;
};

const Game = () => {
    const [board, setBoard] = useState(generateBoard(10, 10, 10));

    const handleCellClick = (rowIndex, colIndex) => {
        const newBoard = [...board];
        newBoard[rowIndex][colIndex].isRevealed = true;
        setBoard(newBoard);
    };

    return (
        <div>
            <h1>Minesweeper</h1>
            <Board board={board} onCellClick={handleCellClick} />
        </div>
    );
};

export default Game;
