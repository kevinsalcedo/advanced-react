import commentsReducer from "reducers/comments";
import { SAVE_COMMENT } from "actions/types";

// To test: call the Reducer
// pass in a fake action
// Make an assertion around the returned value

// The reducer should properly handle a save comment action
it("handles actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  };

  const newState = commentsReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

// The reducer should not crash when given
// an action of an unknown type
it("handles action with unknown type", () => {
  const newState = commentsReducer([], { type: "NONE" });

  expect(newState).toEqual([]);
});
