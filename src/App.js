import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import UserForm from "./components/UserForm";

//https://api.github.com/users/john

function App() {
  const [repos, setRepos] = useState(null);

  const getUser = e => {
    e.preventDefault();
    const user = e.target.elements.username.value;
    axios.get(`https://api.github.com/users/${user}`).then(res => {
      const repos = res.data.public_repos;
      setRepos(repos);
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>HTTP Calls in React</h1>
      </header>
      <UserForm getUser={getUser} />
      {repos ? <p>Number of repos: {repos}</p> : <p>Please enter a username</p>}
    </div>
  );
}

export default App;
