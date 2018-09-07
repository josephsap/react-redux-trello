import React from 'react';
import { Link } from 'react-router-dom'

const BoardList = ({ boards }) => {
  const boardItems = boards.map(board => (
    <li 
      key={board.id}
    >
      <Link to={`/boards/${board.id}`}>
        {board.name}
      </Link>
    </li>
  ));
  return (
    <ul>{ boardItems }</ul>
  );
};


export default BoardList;