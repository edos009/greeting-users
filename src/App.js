import React from "react";
import "./App.css";
import MainTitle from "./components/Main/MainTitle/MainTitle";
import GreetingUser from './components/Main/GreetingUser/GreetingUser';

function App() {
  return (
    <>
      <MainTitle text="Hello everybody" />
      <GreetingUser/>
    </>
  );
}

export default App;
