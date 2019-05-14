import React from 'react';

import './App.css';

class CoolButton extends React.Component {
  render(props) {
    return (
      <button className={props.class}>{props.name}</button>
    );
  }
}

export default CoolButton;