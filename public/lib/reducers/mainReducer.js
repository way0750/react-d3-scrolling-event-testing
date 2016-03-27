import {combineReducers} from 'redux';
import resumeReducer from './resumeReducer.js';
import sectionsReducers from './sectionsReducers.js';
export default combineReducers({
  resume: resumeReducer,
  section: sectionsReducers
});
