// **** Installed libraries **** //
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

// **** JSX **** //
import App from './App.jsx'

// **** Relative Data Base **** //
import { Albums } from './Relative Data Base/Albums.js';
import { Comments } from './Relative Data Base/Comments.js';
import { Photos } from './Relative Data Base/Photos.js';
import { Posts } from './Relative Data Base/Posts.js';
import { Todos } from './Relative Data Base/Todos.js';
import { Users } from './Relative Data Base/Users.js';
// **** Relative Data Base end **** //

// **** CSS **** //
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App
      albums={Albums}
      comments={Comments}
      photos={Photos}
      posts={Posts}
      todos={Todos}
      users={Users}
    />
  </BrowserRouter>
);
