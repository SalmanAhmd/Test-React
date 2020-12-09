import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

import App from "../App";
import { Account } from '../component'

// skip test
it.skip("renders without crashing", () => {
  shallow(<App />);
});

const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave",
};


it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});

describe("mock user name", () => {
  it("accepts user account props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
    wrapper.unmount();
  });
  it("contains users account email", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual(user.email);
    wrapper.unmount();
  });
  // it("renders correctly with no error message", () => {
  //   const wrapper = mount(<Account user={user} />);
  //   expect(wrapper.state("error")).toEqual(null);
  // });
});

it("renders correctly Shallow", () => {
  const treeShollow = shallow(<App />);
  expect(toJson(treeShollow)).toMatchSnapshot();
});

it("renders correctly Mount", () => {
  const treeMount = mount(<App />);
  expect(toJson(treeMount)).toMatchSnapshot();
  treeMount.unmount();
});
