import React, { Component } from "react";
import "./calculator.css";
import Collapsible from "react-collapsible";

//add in comparison on the right.

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valPoint: "",
            nonCatER: "",
            nonCatSpend: "",
            bonusCat1ER: "",
            bonusCat1Spend: "",
            bonusCat2ER: "",
            bonusCat2Spend: "",
            bonusCat3ER: "",
            bonusCat3Spend: "",
            pointsReturned: "",
            dollarsReturned: ""
        };
    }

    //clean up syntax for event handler
    onInputChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name; //name = target.name, target = event.target.name, value = event.target.value;

        this.setState(
            {
                [name]: value
            },
            () => {
                const pointsReturned =
                    this.state.nonCatER * this.state.nonCatSpend +
                    this.state.bonusCat1ER * this.state.bonusCat1Spend +
                    this.state.bonusCat2ER * this.state.bonusCat2Spend +
                    this.state.bonusCat3ER * this.state.bonusCat3Spend;
                const dollarsReturned =
                    ((this.state.nonCatER * this.state.nonCatSpend +
                        this.state.bonusCat1ER * this.state.bonusCat1Spend +
                        this.state.bonusCat2ER * this.state.bonusCat2Spend +
                        this.state.bonusCat3ER * this.state.bonusCat3Spend) *
                        this.state.valPoint) /
                    100;
                this.setState({
                    cardName: this.props.cardName,
                    pointsReturned: pointsReturned,
                    dollarsReturned: dollarsReturned
                });
            }
        );
    };

    cardRemove = () => {
        this.props.removeCard(this.props.cardName);
    };

    render() {
        return (
            <div
                className="Calculator"
                name={this.props.cardName}
                id={this.props.cardName}
            >
                <p />
                <form name={this.props.cardName} id={this.props.cardName}>
                    <span className="section-header">
                        {" "}
                        {this.props.cardName}{" "}
                    </span>
                    <br />
                    <span className="section-header"> Value Per Point: </span>
                    <input
                        style={{ width: 65 }}
                        name="valPoint"
                        min="0.1"
                        step="0.1"
                        max="10.0"
                        type="number"
                        value={this.state.valPoint}
                        onChange={this.onInputChange}
                    />
                    <br />
                    <Collapsible
                        className="section-header"
                        trigger={" Non-Bonus Spending:"}
                    >
                        <div className="form-field">
                            {" "}
                            Earn Rate:
                            <input
                                style={{ width: 65 }}
                                name="nonCatER"
                                min="0.1"
                                type="number"
                                step="0.1"
                                max="50"
                                value={this.state.nonCatER}
                                onChange={this.onInputChange}
                            />
                        </div>

                        <label>
                            <div className="form-field">
                                {" "}
                                Dollars of Spend:
                                <input
                                    style={{ width: 100 }}
                                    name="nonCatSpend"
                                    step="100"
                                    type="number"
                                    min="100"
                                    max="1,000,000"
                                    value={this.state.nonCatSpend}
                                    onChange={this.onInputChange}
                                />
                            </div>
                        </label>
                    </Collapsible>

                    <Collapsible
                        className="section-header"
                        trigger={"Bonus Category 1: "}
                    >
                        <div className="collapsible-BC1">
                            <label>
                                <div className="form-field">
                                    Earning Rate:
                                    <input
                                        style={{ width: 65 }}
                                        name="bonusCat1ER"
                                        min="0.1"
                                        type="number"
                                        step="0.1"
                                        max="50"
                                        value={this.state.bonusCat1ER}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                            </label>

                            <br />
                            <label>
                                <div className="form-field">
                                    Spend:
                                    <input
                                        style={{ width: 100 }}
                                        name="bonusCat1Spend"
                                        step="100"
                                        type="number"
                                        min="100"
                                        max="1,000,000"
                                        value={this.state.bonusCat1Spend}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                            </label>
                        </div>
                    </Collapsible>

                    <Collapsible
                        className="section-header"
                        trigger={"Bonus Category 2: "}
                    >
                        <div className="collapsible-BC2">
                            <label>
                                <div className="form-field">
                                    Earning Rate:
                                    <input
                                        style={{ width: 65 }}
                                        name="bonusCat2ER"
                                        min="0.1"
                                        type="number"
                                        step="0.1"
                                        max="50"
                                        value={this.state.bonusCat2ER}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                            </label>
                        </div>

                        <label>
                            <div className="form-field">
                                Spend:
                                <input
                                    style={{ width: 100 }}
                                    name="bonusCat2Spend"
                                    step="100"
                                    type="number"
                                    min="100"
                                    max="1,000,000"
                                    value={this.state.bonusCat2Spend}
                                    onChange={this.onInputChange}
                                />
                            </div>
                        </label>
                    </Collapsible>

                    <Collapsible
                        className="section-header"
                        trigger={"Bonus Category 3:"}
                    >
                        <div className="collapsible-BC3">
                            <label>
                                <div className="form-field">
                                    Earning Rate:
                                    <input
                                        style={{ width: 65 }}
                                        name="bonusCat3ER"
                                        min="0.1"
                                        type="number"
                                        step="0.1"
                                        max="50"
                                        value={this.state.bonusCat3ER}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                            </label>

                            <br />
                            <label>
                                <div className="form-field">
                                    Spend:
                                    <input
                                        style={{ width: 100 }}
                                        name="bonusCat3Spend"
                                        step="100"
                                        type="number"
                                        min="100"
                                        max="1,000,000"
                                        value={this.state.bonusCat3Spend}
                                        onChange={this.onInputChange}
                                    />
                                </div>
                            </label>
                        </div>
                    </Collapsible>
                    <br />
                    <label>
                        <span className="section-header">
                            {" "}
                            Total Points Earned:{" "}
                        </span>
                        <input
                            style={{ width: 100 }}
                            name="pointsReturned"
                            type="number"
                            value={this.state.pointsReturned}
                            onChange={this.onInputChange}
                        />
                    </label>
                    <br />
                    <label>
                        <span className="section-header">
                            {" "}
                            Dollar Value Earned:{" "}
                        </span>
                        <input
                            style={{ width: 100 }}
                            name="dollarsReturned"
                            type="number"
                            value={this.state.dollarsReturned}
                            onChange={this.onInputChange}
                            width="50%"
                        />
                    </label>
                </form>

                <button className="deleteButton" id={this.cardName} onClick={this.cardRemove}>Delete Card!</button>
            </div>
        );
    }
}

export default Calculator;
