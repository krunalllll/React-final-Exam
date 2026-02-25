import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/postActions";
import { Link } from "react-router-dom";

function PostList() {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filtered = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        className="form-control mb-3"
        placeholder="Search..."
        onChange={e => setSearch(e.target.value)}
      />

      <div className="row">
        {filtered.map(post => (
        <div className="col-md-4 mb-4" key={post.id}>
  <div className="card blog-card h-100 shadow-sm">
    
   <div className="img-container">
  <img
    src={post.image}
    alt={post.title}
    className="card-img-top uniform-img"
  />
</div>

    <div className="card-body d-flex flex-column">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text text-muted small">
        {post.date}
      </p>

      <div className="mt-auto">
        <Link 
          to={`/post/${post.id}`} 
          className="btn btn-primary w-100"
        >
          Read More
        </Link>
      </div>
    </div>

  </div>
</div>
        
        ))}
      </div>
    </>
  );
}

export default PostList;