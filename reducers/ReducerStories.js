import {FETCH_STORIES, CREATE_STORY, LIKE_STORY, DISLIKE_STORY} from '../actions';

export default function(state=[], action) {
  switch (action.type) {

    case CREATE_STORY:
    if (action.payload.data) {
      const createdStory = action.payload.data.story;
      return [createdStory,...state];
    }
    return state;
    case FETCH_STORIES:

    if (action.payload.data) {
      // console.log(action.payload.data);
      return action.payload.data;
    }
    else {
        return state;
    }
    break;

    case LIKE_STORY:
    if (action.payload.data) {
      return []
    }
    return state;

    case DISLIKE_STORY:
    if (action.payload.data) {
      return []
    }
    return state;

    default:return state
  }
}
