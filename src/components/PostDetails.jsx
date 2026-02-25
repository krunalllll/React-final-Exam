import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPosts } from "../redux/postActions";
import { useEffect } from "react";

function PostDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const posts = useSelector((state) => state.posts);

  // 🔥 Fetch posts when page loads
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const post = posts.find((p) => p.id == id);

  // 🔥 Safety Check
  if (!post) {
    return (
      <div className="text-center mt-5">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">

          <div className="card shadow-lg border-0 p-4">

            {/* Image */}
            <img
              src={post?.image}
              alt={post?.title}
              className="img-fluid rounded mb-3"
              style={{
                height: "350px",
                width: "100%",
                objectFit: "cover"
              }}
            />

            {/* Title */}
            <h2 className="mb-3">{post?.title}</h2>

            {/* Description */}
            <p className="text-muted">{post?.description}</p>

            {/* Extra Info */}
            <p><strong>Date:</strong> {post?.date}</p>
            <p><strong>Category:</strong> {post?.category}</p>

            {/* Buttons */}
            <div className="mt-4 d-flex justify-content-between">

              <button
                className="btn btn-secondary"
                onClick={() => navigate("/")}
              >
                Back
              </button>

              <button
                className="btn btn-danger"
                onClick={() => {
                  dispatch(deletePost(post.id));
                  navigate("/");
                }}
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default PostDetails;