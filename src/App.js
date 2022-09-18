import React from 'react';
import './App.css';
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <head>
        <link rel='icon' href='images/github-logo.png' />
        <link rel='stylesheet' href='App.css' />

        <meta name="viewport" content="width=device-width"/>

        <meta name='author' content='Rahul Ghatak' />
        <meta name="description" content="This webpage belongs to Rahul Ghatak  ." />

        <title>
          Home
        </title>
      </head>
      <body>
        <div className='navigation'>
          <Navbar />
        </div>

        <div className='Title'>
          <h1>
            This is my Title
          </h1>
        </div>
        <div className='Content'>
          <p>
            This is my content
          </p>
        </div>  
        <div className='Github'>
          <a href='https://github.com/SgtGhatak' title='My Github'>
            This is my GitHub
          </a>
          <img src="images/GitHub-Mark-120px-plus.png" alt='Github Logo' />
        </div>
      </body>
    </div>
  );
}

export default App;
