export default function (previousState, action) {
  if (action.type === 'addSection') {
    previousState.push(action.payload);
    return previousState;
  } else if (!previousState) {
    return [];
  } else if (action.type === 'deleteSection' && action.payload) {
    //if action payload is 0, then you are basically coping the section array over and over
    //and you will end up re-render the view over and over and end up with infinite loop
    return previousState.slice(action.payload);
  }else {
    return previousState;
  }
}
