export const LOGIN_USER = 'login_user';
export const FETCH_STORIES = 'fetch_stories';
export const CREATE_STORY = 'create_story';
export const LIKE_STORY = 'like_story';
export const DISLIKE_STORY = 'dislike_story';

import axios from 'axios';
const ROOT_URL = 'http://localhost:5000/api/v1';

export function loginUser(username, password) {
  // Only works when the express uses bodyParser.json(). <-- 2 Hours.Right there.
  const data = {
    username: username,
    password: password
  };
  return (dispatch) => {
    axios.post(`${ROOT_URL}/user/login`, data).then(res => {
      dispatch({type:LOGIN_USER, payload:res});
    }).catch((err) => {
      console.log("Action failed!");
      console.log(err);
    });
  }
}

export function fetchStories(auth_token) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/story`, {'headers':{'auth_token':auth_token}}).then(res => {
      dispatch({type:FETCH_STORIES, payload:res});
    }).catch((err) => {
      console.log("Action failed!");
      console.log(err);
    });
  }

}

export function createStory(text, auth_token) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/story`, {text:text},{'headers':{'auth_token':auth_token}}).then(res => {
      dispatch({type:CREATE_STORY, payload:res});
    }).catch((err) => {
      console.log("Action failed!");
      console.log(err);
    });
  }
}

export function likeStory(story_id, auth_token) {
  console.log("Liking story with accesstoken : " + auth_token);
  return (dispatch) => {
    axios.post(`${ROOT_URL}/story/${story_id}/like`,{},{'headers':{'auth_token':auth_token}}).then(res => {
      dispatch({type:LIKE_STORY, payload:res});
    }).catch((err) => {
      console.log("Action failed!");
      console.log(err);
    });
  }

}

export function dislikeStory(story_id, auth_token) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/story/${story_id}/dislike`,{},{'headers':{'auth_token':auth_token}}).then(res => {
      dispatch({type:DISLIKE_STORY, payload:res});
    }).catch((err) => {
      console.log("Action failed!");
      console.log(err);
    });
  }
}
