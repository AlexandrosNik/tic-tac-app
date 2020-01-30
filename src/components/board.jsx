import React, { Component } from 'react';
import Square from './square';

class Board extends Component {

    createTable = (array) => {
        let table = [];
        
        // Outer loop to create parent
        for (let i = 0; i < array.length;) {
            let children = [];
            //Inner loop to create children
            for (let j = 0; j < 3; j++) {
                children.push(this.renderSquare(i))
                i++;
            }
            //Create the parent and add the children
            table.push(<div className = 'board-row' key={i}>{children}</div>)
        }
        return table;
    }
 
    renderSquare(i) {
        const winnerI = this.props.winnerLine.includes(i);
    
        return (
            <Square 
                key={i}
                classWinner={winnerI ? 'square--winning':''}
                value={this.props.squares[i]} 
                onClick={() => this.props.onClick(i)}
            />
        );
    }

    render() {
        const { squares } = this.props;
        return (
            <div>
                {this.createTable(squares)}
            </div>
        );
    }
}

export default Board;
