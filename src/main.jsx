import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter } from 'react-router-dom';

// **** Relative Data Base **** //
import { Albums } from './Relative Data Base/Albums.jsx';
import { Comments } from './Relative Data Base/Comments.jsx';
import { Photos } from './Relative Data Base/Photos.jsx';
import { Posts } from './Relative Data Base/Posts.jsx';
import { Todos } from './Relative Data Base/Todos.jsx';
import { Users } from './Relative Data Base/Users.jsx';
// **** Relative Data Base end **** //

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
