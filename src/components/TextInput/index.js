import React from 'react';

const TextInput = (props) => {

  return (
    <div>
      <label>{props.label}</label>
      <input 
        type="text"
        name={props.name}
        value={props.content}
        type={props.inputType}
        onChange={props.controlFunction}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextInput;
