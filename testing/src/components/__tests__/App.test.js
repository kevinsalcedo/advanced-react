import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("shows a comment box", () => {
  // Use JSDOM to spoof a browser div
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  // Look inside div
  // Check if CommentBox is in there
  expect(div.innerHTML).toContain("CommentBox");

  // Remove the component rendered in the JSDOM
  // Test cleanup
  ReactDOM.unmountComponentAtNode(div);
});
