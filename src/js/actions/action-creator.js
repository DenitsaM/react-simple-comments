import { actionTypes } from './action-types';

export const loadCommentsActionCreator = (commentsArray) => ({
    type: actionTypes.LOAD_COMMENTS,
    comments: commentsArray,
  });
  export const deleteCommentsActionCreator = (comments) => ({
    type: actionTypes.DELETE_COMMENTS,
    comments: comments,
  });
  export const updateCommentsActionCreator = (comments) => ({
    type: actionTypes.UPDATE_COMMENTS,
    comments: comments,
  });