import { ADD_TEXT, ADD_NAME, ADD_POST, ADD_URL } from "./action";
import photo1 from "../assetc/1.jpg";
import photo2 from "../assetc/2.jpg";
import photo3 from "../assetc/3.jpg";
import photo4 from "../assetc/4.jpg";

export const POSTS = [
  {
    name: "Kate",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: photo1,
    like: Math.floor(Math.random() * 100),
  },
  {
    name: "Andri",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: photo2,
    like: Math.floor(Math.random() * 100),
  },
  {
    name: "Nata",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: photo3,
    like: Math.floor(Math.random() * 100),
  },
  {
    name: "Roma",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: photo4,
    like: Math.floor(Math.random() * 100),
  },
];

const initiState = {
  posts: POSTS,
  text: "",
  name: "",
  img: "",
};

const reducer = (state = initiState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_TEXT: {
      return {
        ...state,
        text: payload,
      };
    }
    case ADD_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    case ADD_URL: {
      return {
        ...state,
        img: payload,
      };
    }
    case ADD_POST: {
      let { text, name, img, like } = state;
      let newPost = {
        text,
        name,
        img,
        like,
      };

      return {
        ...state,
        posts: [newPost, ...state.posts],
      };
    }
    default:
      return state;
  }
};

export default reducer;
