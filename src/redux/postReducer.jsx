const initialState = {
  posts: [],
  user: null
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {

    case "SET_POSTS":
      return {
        ...state,
        posts: action.payload
      };

    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };

    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === action.payload.id ? action.payload : post
        )
      };

    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload)
      };

    case "LOGIN":
      return {
        ...state,
        user: action.payload
      };

    case "LOGOUT":
      return {
        ...state,
        user: null
      };

    default:
      return state;
  }
};

export default postReducer;