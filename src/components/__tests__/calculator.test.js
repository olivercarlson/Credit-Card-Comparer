import React from "react";
import Enzyme from "enzyme";
import Calculator from "../calculator";

const { mount, shallow } = Enzyme;

describe("Calculator", () => {
    const wrapper = mount(<Calculator />);
    const shallowCalc = shallow(<Calculator />);

    test("Calculator component exists", () => {
        expect(wrapper).toMatchSnapshot();
    });

    //check that Calculator intiial output renders empty

    it("Calculator valPoint init renders blank", () => {
        expect(shallowCalc.state("valPoint")).toEqual("");
    });

    it("Calculator nonCatER init renders blank", () => {
        expect(shallowCalc.state("nonCatER")).toEqual("");
    });

    it("Calculator nonCatER init renders blank", () => {
        expect(shallowCalc.state("nonCatSpend")).toEqual("");
    });

    //check that Calculator initial output renders empty

    it("Calculator pointsReturned init renders blank", () => {
        expect(shallowCalc.state("pointsReturned")).toEqual("");
    });

    it("Calculator dollarsReturned init renders blank", () => {
        expect(shallowCalc.state("dollarsReturned")).toEqual("");
    });

    //1. input calculations 2. event handler fires 3. clear out previous setstate (line 52+53) output returns correct value.

    it("Check that 1 cpp + 1x earn rate + $10k spend => $100 returned", () => {
        wrapper.setState({ valPoint: 1, nonCatER: 1, nonCatSpend: 10000 });
        wrapper
            .find("input")
            .last()
            .simulate("change");
        expect(wrapper.state("dollarsReturned")).toStrictEqual(100);
    });

    it("PRG Works ( 1.25cpp, + 4x bonus cat er + $10k spend => $500 returned. DON'T FORGET TO CLEAR PREVIOUS SET STATE", () => {
        wrapper.setState({
            nonCatER: "",
            nonCatSpend: "",
            valPoint: 1.25,
            bonusCat1ER: 4,
            bonusCat1Spend: 10000
        });
        wrapper
            .find("input")
            .last()
            .simulate("change");
        expect(wrapper.state("dollarsReturned")).toStrictEqual(500);
        expect(wrapper.state("pointsReturned")).toStrictEqual(40000);
    });
});
