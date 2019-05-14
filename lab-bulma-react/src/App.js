import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';


function App() {
  return (
    <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
      <CoolButton isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSmall isSuccess>Button 2</CoolButton>
    </div>
  );
}

export default App;
