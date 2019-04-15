import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root";

let wrapped;

// BeforeEach & AfterEach should happen after about every test
beforeEach(() => {
  // Create CommentBox component
  // Pass it off to mount to do a Full DOM rendering
  // Only doing Full DOM instead of shallow for learning purposes

  // Wrap CommentBox in Root cmpnt to give Provider + store
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  // Unmount CommentBox component
  // To not pollute other tests
  wrapped.unmount();
});

// Testing to see if proper fields are rendered
it("has a textarea and a button", () => {
  // Look for how many instances of textarea/button - should be 1 each
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
});

// Groups test with similar setup/teardown
// Also limits scope of some functions
describe("the text area", () => {
  beforeEach(() => {
    // Simulate an event "change"
    // Changes event.target.value to 'new comment'
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });

    // Force component to re-render
    wrapped.update();
  });

  // testing to see if a user is able to enter values into a textarea
  it("has a textarea that users can type in", () => {
    // Find the prop (event.target.value) in textarea
    // Make sure it is the value we specified
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
  });

  // Testing to make sure textare gets emptied out completely
  it("empties out the textarea after submit", () => {
    // Simulate form submission
    wrapped.find("form").simulate("submit");

    // Force a re-render
    wrapped.update();

    // Textarea should be empty after submission
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
