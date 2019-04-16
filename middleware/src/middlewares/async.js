// async - functionally similar to reduxPromise

// Boilerplate for middleware functions
export default ({ dispatch }) => next => action => {
  // Check to see if action has a promise as paylaod
  // If yes, then wait for it to resolve
  // Else, send action to next middleware

  // If an action has a then() prop, then assume it 's a promise
  if (!action.payload || !action.payload.then) {
    // Call next middlware with next
    // Pass along action
    return next(action);
  }

  // Wait for the promise to return, append the response to payload
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
