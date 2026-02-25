import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Navbar() {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand">
      <div className="container">
        <Link className="navbar-brand" to="/">BlogApp</Link>

        <div>
          {user ? (
            <>
              <Link className="btn btn-light me-2" to="/add">Add Post</Link>
              <button className="btn btn-danger"
                onClick={() => dispatch({ type: "LOGOUT" })}>
                Logout
              </button>
            </>
          ) : (
            <button className="btn btn-success"
              onClick={() => dispatch({ type: "LOGIN", payload: "admin" })}>
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;