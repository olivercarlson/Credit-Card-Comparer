import React, { Component } from 'react';
import './add_calculator.css';


class AddCalculator extends Component {
    constructor(props) {
        super(props);

        this.state = { cardName: '' };
    }
    handleUpdate = (event) => {
        this.setState({ cardName: event.target.value });
    }

    addCalculator = () => {
        this.props.addCalculator(this.state.cardName);
        this.setState({ cardName: '' });
    };

    render() {
        return (
            <div className="AddCalculator">
                <p> </p>
                <input type="text" placeholder="Card Name" onChange={this.handleUpdate} value={this.state.cardName} name="cardName" style={{ width: 150 }} />
                <p></p>
                <button id="addButton" onClick={this.addCalculator}>Add a card!</button>
            </div>
        )
    }
};

export default AddCalculator; 
