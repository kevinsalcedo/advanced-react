import { SAVE_COMMENT, FETCH_COMMENTS } from "actions/types";

// Reducer needs state and an action
// The default for state is empty
// Switch statement for action type
export default function(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.data.map(comment => comment.name);
      return [...state, ...comments];
    default:
      return state;
  }
}
