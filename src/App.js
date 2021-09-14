import React from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Email from "./components/Email";
import Crossbar from "./components/Crossbar";


const App = () => {
  

  // const titles = ['Continue with Google', 'Continue with Github', 'Email me a sign in code'];
  const titles = [
    {
      id: 1,
      title: 'Continue with Google',
    },
    {
      id: 2,
      title: 'Continue with Github',
    },
    {
      id: 3,
      title: 'Email me a sign in code',
    }
  ];

 
  
  return (
    <div className="App">
      <Header />
      <Button title = { titles[0].title }  />
      <Button title = { titles[1].title }  />
      <Crossbar />
      <Email />
      <Button title = { titles[2].title }  />
    </div>
  );
}

export default App;
