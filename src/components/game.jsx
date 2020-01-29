import React, { Component } from 'react';
import Board from './board';
import { calculateWinner, getLocations } from './../utils/functions';

class Game extends Component {
    state = {
        history: [
            {
            squares: Array(9).fill(null),
            }
        ],
        xIsNext: true,
        stepNumber: 0,
        isDescending:true        
    }


    handleClick = i => {
        const history  = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = [...current.squares];
        const location = getLocations(i);
        const winner = calculateWinner(squares);
        
        
        
        if(winner || squares[i]) return;
        
        let xIsNext = this.state.xIsNext;
        squares[i] = xIsNext ? 'X' : 'O';
        xIsNext = !xIsNext;

        this.setState({ 
                        history:history.concat([{squares:squares, location}]), 
                        xIsNext,
                        stepNumber:history.length
                    });
    }

    sortHistory() {
        this.setState({isDescending: !this.state.isDescending});
    }

    jumpTo = (index) => {
        //index % 2 === 0 returns 'true' when index is even and 'false' when it is odd
        this.setState({stepNumber:index, xIsNext: (index % 2 === 0)});
    }
    
    render() {
        const { history, xIsNext, stepNumber } = this.state;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        
        const moves = history.map((move,index) => {
            const desc = index 
            ? "Go to move #" + index + " @ " + history[index].location 
            : 'Go to game start';

            return (
                <li key={index}>
                    <button onClick={() => this.jumpTo(index)}>
                        {index === stepNumber ? <b>{desc}</b> : desc}  
                    </button>
                </li>
            )
        });

        
        let status ='Next player: ';
        if(winner) {
            status=`Winner ${winner.isWinner}`;
        }
        else {
            status+=xIsNext ? 'X' : 'O';
        }

        return (
        <div className="game">
            <div className="game-board">
            <Board 
                winnerLine={winner ? winner.winnerLine:''}
                xIsNext={xIsNext} 
                squares={current.squares} 
                onClick={this.handleClick}
            />
            </div>
            <div className="game-info">
            <div>{status}</div>
                <ul>
                    {this.state.isDescending ? moves : moves.reverse()}
                </ul>
                <button onClick={() => this.sortHistory()}>
                    Sort By {this.state.isDescending ? 'Desc':'Asc'}
                </button>
            </div>
        </div>
        );
    }
}

export default Game;