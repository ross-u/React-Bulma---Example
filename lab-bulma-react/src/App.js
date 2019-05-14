import React from 'react';
import './App.css';
import Navbar from './Navbar';
import FormField from './FormField';
import CoolButton from './CoolButton';
import Signup from './components/Signup';


class App extends React.Component {
  render(){
    return (
      <div className="App">
      <Navbar />
      <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
      <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />

      <CoolButton isDanger className="is-rounded my-class">Button 1</CoolButton>
      <CoolButton isSuccess>Button 2</CoolButton>
    </div>
  );
}
}

export default App;
