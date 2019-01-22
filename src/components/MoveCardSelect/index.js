import React from 'react';

const MoveCardSelect = (props) => {
  return (
    <select>
      {props.activeBoard.map((listItem) => {
        return (
          <option key={listItem.id} id={listItem.id}>
            {listItem.listName}
          </option>
        )
      })}
    </select>
  );
};

export default MoveCardSelect;