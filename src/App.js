import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostDetails from "./components/PostDetails";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Routes>

          {/* Home Page */}
          <Route path="/" element={<PostList />} />

          {/* Add Post - Protected */}
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <PostForm />
              </PrivateRoute>
            }
          />

          {/* Post Details */}
          <Route path="/post/:id" element={<PostDetails />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <h3 className="text-center text-danger">
                404 - Page Not Found
              </h3>
            }
          />

        </Routes>
      </div>
    </>
  );
}

export default App;