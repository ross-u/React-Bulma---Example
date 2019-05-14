import React from 'react';

import './App.css';

class FormField extends React.Component {
  render(props) {
    return (
      <div className="field">
        <label className="label">{props.name}</label>
        <div className="control">
          <input className="input" type={props.type} placeholder={props.placeholder} />
        </div>
      </div>
    );
  }
}

export default FormField;