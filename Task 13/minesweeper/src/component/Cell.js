// src/components/Cell.js
import React from 'react';

const Cell = ({ cell, onClick }) => {
    return (
        <button className={`cell ${cell.isRevealed ? 'revealed' : ''}`} onClick={onClick}>
            {cell.isRevealed ? (cell.isMine ? '💣' : cell.adjacentMines) : ''}
        </button>
    );
};

export default Cell;
