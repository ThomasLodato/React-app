import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

export const Comments = (state = {
        errMess: null,
        comments: []
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};    

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length; //This is not a good practice
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)};
        
        default:
          return state;
      }
};