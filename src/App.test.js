import React from "react";
import waitUntil from "async-wait-until";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import { INITAL_POSITION } from "./constants";
import Robot from "./components/robot";

configure({ adapter: new Adapter() });

const component = shallow(<App />);

describe("App component", () => {
  it("Should initial state to be ", () => {
    expect(component.state()).toEqual({
      position: INITAL_POSITION,
      xIndex: 1,
      yIndex: 1,
      moving: false
    });
  });

  it("Should robot initially placed in 1,1", () => {
    expect(component.find("#td11").contains(<Robot />)).toEqual(true);
    /** Check with random cells */
    expect(component.find("#td12").contains(<Robot />)).toEqual(false);
    expect(component.find("#td22").contains(<Robot />)).toEqual(false);
    expect(component.find("#td32").contains(<Robot />)).toEqual(false);
    expect(component.find("#td52").contains(<Robot />)).toEqual(false);
    expect(component.find("#td13").contains(<Robot />)).toEqual(false);
    expect(component.find("#td16").contains(<Robot />)).toEqual(false);
  });
});

describe("Robot position", () => {
  beforeEach(() => {
    component.setState({ position: { x: 4, y: 3 } });
  });
  afterEach(() => {
    component.setState({ position: INITAL_POSITION });
  });
  it("Should robot placed correct posotion", () => {
    component.setState({ position: { x: 4, y: 3 } });
    expect(component.find("#td43").contains(<Robot />)).toEqual(true);
    expect(component.find("#td11").contains(<Robot />)).toEqual(false);
  });
});

describe("Click the navigoter ", () => {
  beforeEach(() => {
    component.find("#right").simulate("click");
  });
  afterEach(() => {
    component.setState({ position: INITAL_POSITION });
  });
  it("Should state change to 2,1", () => {
    expect(component.state().position).toEqual({ x: 2, y: 1 });
  });
  it("Should state change to 2,2", () => {
    component.find("#top").simulate("click");
    expect(component.state().position).toEqual({ x: 2, y: 2 });
  });

  it("Should state change to 1,2", () => {
    component.find("#top").simulate("click");
    component.find("#left").simulate("click");
    expect(component.state().position).toEqual({ x: 1, y: 2 });
  });

  it("Should state change to 2,1", () => {
    component.find("#top").simulate("click");
    component.find("#bottom").simulate("click");
    expect(component.state().position).toEqual({ x: 2, y: 1 });
  });
});

describe("Click the table cell", () => {
  beforeEach(() => {
    component.find("#td35").simulate("click");
  });
  afterEach(() => {
    component.find("#td11").simulate("click");
  });

  it("State change to 3,5", async () => {
    expect(component.state().moving).toEqual(true);
    await waitUntil(() => component.state().moving === false);
    expect(component.state().position).toEqual({ x: 3, y: 5 });
  });
});

describe("Check edges", () => {
  it("East edge ", async () => {
    component.setState({ position: { x: 5, y: 1 } });
    component.find("#right").simulate("click");
    expect(component.state().position).toEqual({ x: 5, y: 1 });
  });

  it("West  edge ", async () => {
    component.setState({ position: { x: 1, y: 1 } });
    component.find("#left").simulate("click");
    expect(component.state().position).toEqual({ x: 1, y: 1 });
  });

  it("North edge ", async () => {
    component.setState({ position: { x: 1, y: 5 } });
    component.find("#top").simulate("click");
    expect(component.state().position).toEqual({ x: 1, y: 5 });
  });

  it("South edge ", async () => {
    component.setState({ position: { x: 1, y: 1 } });
    component.find("#bottom").simulate("click");
    expect(component.state().position).toEqual({ x: 1, y: 1 });
  });
});
