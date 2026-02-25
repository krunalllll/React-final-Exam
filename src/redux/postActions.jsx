import axios from "axios";

const API = "http://localhost:3001/posts";

// ✅ Fetch Posts
export const fetchPosts = () => async (dispatch) => {
  try {
    const res = await axios.get(API);
    dispatch({
      type: "SET_POSTS",
      payload: res.data
    });
  } catch (error) {
    console.log("Fetch Error:", error);
  }
};

// ✅ Add Post
export const addPost = (post) => async (dispatch) => {
  try {
    const res = await axios.post(API, post);
    dispatch({
      type: "ADD_POST",
      payload: res.data
    });
  } catch (error) {
    console.log("Add Error:", error);
  }
};

// ✅ Update Post
export const updatePost = (post) => async (dispatch) => {
  try {
    const res = await axios.put(`${API}/${post.id}`, post);
    dispatch({
      type: "UPDATE_POST",
      payload: res.data
    });
  } catch (error) {
    console.log("Update Error:", error);
  }
};

// ✅ Delete Post
export const deletePost = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API}/${id}`);
    dispatch({
      type: "DELETE_POST",
      payload: id
    });
  } catch (error) {
    console.log("Delete Error:", error);
  }
};