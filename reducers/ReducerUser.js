import {LOGIN_USER} from '../actions';
export default function(state=null, action) {
  switch (action.type) {
    case LOGIN_USER:
    const {data} = action.payload;
    if (data && data.user) {
      console.log("Reducer updated with " + data.user.username);
      return {
        username:data.user.username,
        access_token:data.access_token
      }
    }
    else {
      return state;
    }
    break;
    default:return state

  }
}
