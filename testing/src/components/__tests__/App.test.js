import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

it("shows a comment box", () => {
  // Object received is in a wrapper component
  const wrapped = shallow(<App />);

  // Get every instance of CommentBox in wrapped
  // Make sure there is only one instance rendered
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
