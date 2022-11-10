import { POSTS } from "./reducer";
export const ADD_TEXT = "ADD_TEXT";
export const ADD_NAME = "ADD_NAME";
export const ADD_URL = "ADD_URL";
export const ADD_POST = "ADD_POST";

export const addText = (text) => ({
  type: ADD_TEXT,
  payload: text,
});

export const addName = (name) => ({
  type: ADD_NAME,
  payload: name,
});

export const addUrl = (urlLink) => ({
  type: ADD_URL,
  payload: urlLink,
});
export const addPost = () => ({
  type: ADD_POST,
});
