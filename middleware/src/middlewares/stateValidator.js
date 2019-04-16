import tv4 from "tv4";
import stateSchema from "./stateSchema.json";
export default ({ dispatch, getState }) => next => action => {
  next(action);

  // Make sure the submitted values are of the correct schema
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn("Invalid state schema detected");
  }
};
