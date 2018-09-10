import React from 'react';

const CardList = props => {
  console.log(props, 'iiiii')
  return (
    <div>
      card list here
      {props.activeBoard.data}
    </div>
  );
}

export default CardList;