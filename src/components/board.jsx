import React, { Component } from 'react';
import Square from './square';

class Board extends Component {
    
    
    // createTable = (array) => {
    //     let table = [];
        
    //     // Outer loop to create parent
    //     for (let i = 0; i < array.length;) {
    //         let children = [];
    //         //Inner loop to create children
    //         for (let j = 0; j < 3; j++) {
    //             children.push(this.renderSquare(i))
    //             i++;
    //         }
    //         //Create the parent and add the children
    //         table.push(<div className = 'board-row' key={i}>{children}</div>)
    //     }
    //     return table;
    // }

  
    renderSquare(i) {
        const winnerI = this.props.winnerLine.includes(i);
    
        return (
            <Square 
                key={i}
                classWinner={winnerI ? ' square--winning':''}
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

export default Board;
