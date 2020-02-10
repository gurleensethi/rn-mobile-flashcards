const logger = state => next => action => {
  console.log("Action Fired", action.type);
  next(action);
};

export default logger;
