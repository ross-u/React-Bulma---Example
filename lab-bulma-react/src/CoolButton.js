import React from 'react';

const createClassString = (props) => {
  let result = '';
  if (props.className) result += `${props.className} `; 
  if (props.isDanger) result += 'is-danger ';
  if (props.isPrimary) result += 'is-primary ';
  if (props.isSuccess) result += 'is-success ';
  return result;
}



function CoolButton (props) {
  return (
  <button className={`button ${createClassString(props)}`}>{props.children}</button>
  );
}

export default CoolButton;