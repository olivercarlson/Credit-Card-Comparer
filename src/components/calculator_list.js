import React, { Component } from 'react';
import './calculator_list.css';
import Calculator from './calculator';
import AddCalculator from './add_calculator';

//add in custom name field for each card.
//add in comparison on the right.
let i = 2;

class CalculatorList extends Component {
    constructor(props) {
        super(props);
        this.state = { cardName: ['Card #1'] };
    }

    addCalculator = (newCard) => {
        if (newCard === '' && this.state.cardName.length < 4) {
            newCard = `Card #${i}`;
            i++;
            this.setState(({cardName: [...this.state.cardName, newCard] }));
        };

        if (this.state.cardName.length < 4) {
            this.setState({ cardName: [...this.state.cardName, newCard] });
        } else {
            alert('Maximum 4 cards concurrently');
        }
    };

    removeCard = (removeName) => {
        const remainingCalculators = this.state.cardName.filter(name => {
            return name !== removeName;
        });
        this.setState({ cardName: remainingCalculators });
    };

    renderCalculators = () => {
        return this.state.cardName.map((name) => (<Calculator key={name} cardName={name} removeCard={this.removeCard} />));
    };

    //add calculator needs to pass calculatorname in.

    render() {
        return (
            <div className="CalculatorList">
                <AddCalculator addCalculator={this.addCalculator} />
                {this.renderCalculators()}
            </div>

        );
    };
};

export default CalculatorList;  