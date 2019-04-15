import { CHANGE_AUTH } from "actions/types";
// Just to store a boolean
// True if logged in
// False otherwise
export default function(state = false, action) {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
}
