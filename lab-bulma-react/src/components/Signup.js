import React, { Component } from 'react';
import Navbar from './../Navbar';
import FormField from './../FormField';
import CoolButton from './../CoolButton';

class Signup extends Component {
  render() {
    return (
      <div>
        <Navbar />  
        <FormField label="Name" type="text" placeholder="Name" />
        <FormField label="Email" type="email" placeholder="Your Email" />
        <FormField label="Password" type="password" placeholder="Enter Password" />

        <CoolButton isDanger className="is-rounded my-class">Button 1</CoolButton>

      </div>
    )
  }
}

export default Signup;