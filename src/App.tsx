import React from 'react';
import './App.css';
import Logo from './components/logo/logo.component';
import PostList from './components/post-list/post-list.component';

function App() {
  return (
    <div className="App">
      <Logo/>
      <PostList/>
    </div>
  );
}

export default App;
