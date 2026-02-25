import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, updatePost, fetchPosts } from "../redux/postActions";
import { useState, useEffect } from "react";

function PostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const posts = useSelector(state => state.posts);

  const post = posts.find(p => p.id === Number(id));

  const [editMode, setEditMode] = useState(false);
  const [updatedPost, setUpdatedPost] = useState(post);

  // 🔥 Important: Fetch posts if empty
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(fetchPosts());
    }
  }, [dispatch, posts.length]);

  // 🔥 Update local state when post loads
  useEffect(() => {
    if (post) {
      setUpdatedPost(post);
    }
  }, [post]);

  if (!post) {
    return <h3>Loading...</h3>;
  }

  const handleDelete = () => {
    dispatch(deletePost(post.id));
    navigate("/");
  };

  const handleUpdate = () => {
    dispatch(updatePost(updatedPost));
    setEditMode(false);
  };

  const handleChange = (e) => {
    setUpdatedPost({
      ...updatedPost,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="card p-4">

      {editMode ? (
        <>
          <input
            name="title"
            value={updatedPost.title}
            className="form-control mb-2"
            onChange={handleChange}
          />

          <textarea
            name="description"
            value={updatedPost.description}
            className="form-control mb-2"
            onChange={handleChange}
          />

          <button className="btn btn-success me-2" onClick={handleUpdate}>
            Save
          </button>
        </>
      ) : (
        <>
          <img src={post.image} alt="" className="img-fluid mb-3" />
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <p><b>Date:</b> {post.date}</p>
          <p><b>Category:</b> {post.category}</p>
        </>
      )}

      <div className="mt-3">
        <button
          className="btn btn-warning me-2"
          onClick={() => setEditMode(true)}
        >
          Edit
        </button>

        <button
          className="btn btn-danger"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default PostDetails;