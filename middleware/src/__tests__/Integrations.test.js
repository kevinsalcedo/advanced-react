import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

beforeEach(() => {
  // Sets up moxios to intercept any axios requests
  moxios.install();

  // If it sees a request, then attempt to
  // automatically respond with some data
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200,
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  });
});

afterEach(() => {
  moxios.uninstall();
});

// Integrations test - testing the functionality
// of many components working together
it("can fetch a list of comments and display them", done => {
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // Find the 'fetchComments' button and click it
  wrapped.find(".fetch-comments").simulate("click");

  // Pause and wait for response
  moxios.wait(() => {
    wrapped.update();

    // Expect to find a list of comments
    expect(wrapped.find("li").length).toEqual(2);

    // Mark the test as completed
    done();
    wrapped.unmount();
  });
});
