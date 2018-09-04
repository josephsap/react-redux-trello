import React from 'react';
import BoardList from '../BoardList';

// Navigation gets its props from BoardContainer.
function Navigation({ boards, selectBoard }) {
  return (
    <BoardList
      boards={boards} 
      selectBoard={selectBoard}
    />
  );
}

export default Navigation;
