import {combineReducers} from 'redux';
import ReducerUser from './ReducerUser';
import ReducerStories from './ReducerStories';

const rootReducer = combineReducers({
  user:ReducerUser,
  stories:ReducerStories
});

export default rootReducer;
