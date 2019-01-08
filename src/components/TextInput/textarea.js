import React from 'react';

const TextArea = (props) => {
  console.log(props.content, 'content')
  return (
    <div>
      <label>{props.label}</label>
      <textarea 
        name={props.name}
        value={props.content}
        rows={props.rows}
        cols={props.cols}
        type={props.inputType}
        onChange={props.controlFunction}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default TextArea;
