import Enzyme from "enzyme";
import React from "react";
import CalculatorList from "../components/calculator_list";

const { shallow, mount } = Enzyme;

describe("Calculator component exists", () => {
    const wrapList = mount(<CalculatorList />);
    const shallowAdd = shallow(<CalculatorList />);

    expect(wrapList).toMatchSnapshot();

    //Check default state inits is Card #1
    it("Calculator List exists & has 'cardName: Card #1'", () => {
        expect(wrapList.state("cardName")).toEqual(["Card #1"]);
    });

    //Shallow Add Card Event Handler fires and updates state correctly.
    it("Add Card Event Handler works", () => {
        shallowAdd.instance().addCalculator("CSR");
        expect(shallowAdd.state("cardName")).toContain("CSR");
    });
    //Simulate User manually inputting new Card name
        it("Manually Add Card produces correct array result", () => {
        wrapList
            .find(".AddCalculator input")
            .simulate("change", { target: { value: "CSR" } });
        wrapList.find("button#addButton").simulate("click");
        expect(wrapList.state("cardName")).toContain("CSR");
    });
    //Confirm cardName state is set above, locate delete button div, click, confirm result    
    it("Manually Delete CSR produced above produces correct array result", () => {
        expect(wrapList.state('cardName')).toEqual(['Card #1', 'CSR']);
        wrapList
            .find("div #CSR .deleteButton").simulate('click');
            expect(wrapList.state('cardName')).toEqual(['Card #1']);
    });
});
