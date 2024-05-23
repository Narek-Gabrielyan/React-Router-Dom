
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Loyout from "./Components/Loyout";
import NotFound from "./Components/NotFound";

// **** Pages **** //
import Users from "./Pages/Useres/Users.jsx";
import Albums from "./Pages/Albums/Albums.jsx";
import Comments from "./Pages/Comments/Comments.jsx";
import Photos from "./Pages/Photos/Photos.jsx";
import Posts from "./Pages/Posts/Posts.jsx";
import ToDos from "./Pages/ToDos/ToDos.jsx";
// **** End Pages **** //
import { Product } from "./Components/Product/Product.jsx";

function App({ albums, comments, photos, posts, todos, users }) {

  return (
    <div className="container">
      <div className="container_item">
        <Routes>
          <Route path="/" element={<Loyout />}>
            <Route index element={<Users users={users} />} />
            <Route path="/albums" element={<Albums albums={albums} />} />
            <Route
              path="/comments"
              element={<Comments comments={comments} />}
            />
            <Route path="/photos" element={<Photos photos={photos} />} />
            <Route path="/posts" element={<Posts posts={posts} />} />
            <Route path="/todos" element={<ToDos todos={todos} />} />
            <Route path="*" element={<NotFound />} />

            {/*  */}
            <Route path="/albums/:id" element={<Product albums={albums} />} />

          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
