import React from "react";
import { shallow, mount } from "enzyme";

import App from "./App";
import { Account } from './component'

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
  });
  it("contains users account email", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("david@gmail.com");
  });
});
