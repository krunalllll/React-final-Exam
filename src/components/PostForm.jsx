import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../redux/postActions";
import { useNavigate } from "react-router-dom";

function PostForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    description: "",
    date: "",
    image: "",
    category: ""
  });

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!post.title || !post.description) {
      alert("Title and Description required");
      return;
    }

    dispatch(addPost(post));
    navigate("/");
  };

  return (
    <div className="card p-4">
      <h3>Add New Post</h3>
      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <input
          type="text"
          name="category"
          placeholder="Category"
          className="form-control mb-3"
          onChange={handleChange}
        />

        <button className="btn btn-primary">Add Post</button>

      </form>
    </div>
  );
}

export default PostForm;