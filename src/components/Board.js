import React, { useState } from 'react';
import Square from './Square';

const Board = () => {

    const [square, setSquare] = useState(Array(9).fill(null))
    const [X, setX] = useState(true)
    const [turn, setTurn] = useState('X')
    const [counter, setCounter] = useState(0) 
    const winner = calculateWinner(square)

    console.log(counter)
    const handleClick = (i) => {
        setCounter(counter +1)
        const squares = square.slice()
        if (squares[i] === null) {
            if (!winner) {
                squares[i] = X ? 'X' : 'O'
                setSquare(squares)
                setX(!X)
                X ? setTurn('O') : setTurn('X')
            } else {
                setTurn('X')
            }
        } else {
            alert(`Can't do that!`)
        }
        
    }
    
    const renderSquare = (i) => {
        return (
            <Square
            position={square[i]}
            onClick={ () => handleClick(i) }
            />
        )
    }

    function calculateWinner(square) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (let i = 0; i < lines.length; i++){
            const [a, b, c] = lines[i]
            if (square[a] && square[a] === square[b] && square[a] === square[c]) {
                return square[a]
            }
        }
        return null
    }

    const resetGame = () => {
        setSquare(Array(9).fill(null))
    }

    return (
        <div className="board">
            <h2 className={ winner ? 'winner' : null }  >{ winner ? `The winner is ${winner}` : `Is ${turn} Turn` }</h2>
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
            <button
                // className="reset"
                className={ winner ? 'reset hey' : 'reset'}
                type="button"
                onClick={resetGame}
            >Reset</button>
        </div>
     );
}
 
export default Board;