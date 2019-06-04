export default function(state = null, action) {
  switch (action.type) {
    case "fetch_user":
      console.log(action);
      return action.payload || false;
    default:
      return state;
  }
}
