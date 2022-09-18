import logo from './logo.svg';
import githubLogo from './images/github-logo.png';
import './App.css';

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
          Home page
        </title>
      </head>
      <body>
        <nav>
          <ul>
            <li>
              <a href='/'>Home</a>
              </li>
            <li>
              <a href='/pages/about.js'>About</a>
              </li>
            <li>
              <a href='/pages/contact.js'>Contact </a>
              </li>
          </ul>
        </nav>
        <div class="navbar">
          <a href="">Home</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div> 
        <div>
          <h1>
            This is my Title
          </h1>
        </div>
        <div>
          <p>
            This is my content
          </p>
        </div>
        <div>
          <a href='https://github.com/SgtGhatak' title='My Github'>
            This is my GitHub
          </a>
        </div>
      </body>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
