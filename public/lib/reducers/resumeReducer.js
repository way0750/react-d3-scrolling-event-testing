export default function (previousState, action) {
 if (action.type === 'receivedResume') {
  return previousState.concat(action.payload);
 } else if (!previousState) {
  return [];
 } else {
  return previousState;
 }
}
