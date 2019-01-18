import Enzyme from "enzyme";
import React from "react";
import CalculatorList from "./components/calculator_list";

const { shallow, mount } = Enzyme;

describe("Calculator component exists", () => {
    const wrapList = mount(<CalculatorList />);
    const shallowAdd = shallow(<CalculatorList />);

    expect(wrapList).toMatchSnapshot();

    //Check default init is Card #1
    it("Calculator List exists & has 'cardName: Card #1'", () => {
        expect(wrapList.state("cardName")).toEqual(["Card #1"]);
    });

    //Check a shallow output of Add Card Event Handler fires and updates state correctly.
    it("Add Card Event Handler works", () => {
        shallowAdd.instance().addCalculator("Card #2");
        expect(shallowAdd.state("cardName")).toContain("Card #2");
    });
    //Simulate User manually inputting new Card name, clicking submit and cardlist array properly populates
    it("Manually Add Card produces correct array result", () => {
        wrapList
            .find(".AddCalculator")
            .simulate("change", { target: { value: "Card #2" } });
        wrapList.find("button#addButton").simulate("click");
        expect(wrapList.state("cardName")).toContain("Card #2");
    });
});
