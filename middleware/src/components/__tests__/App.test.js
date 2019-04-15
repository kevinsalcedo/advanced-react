import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

// Before every test, run this code
// Good for repeating statements
beforeEach(() => {
  // Object received is in a wrapper component
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // Get every instance of CommentBox in wrapped
  // Make sure there is only one instance rendered
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
