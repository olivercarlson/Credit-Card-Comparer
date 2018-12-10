import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import CalculatorList from './components/calculator_list';

export default class App extends Component {
    render() {

        return (
            <div>
                <h1><p className="title"> Credit Card Comparer Tool: </p></h1>
                <CalculatorList />
            </div>
        )
    }
};
ReactDOM.render(<App />, document.getElementById('root'));

