import React from 'react';


const CardListItem = (props) => {
  const lists = props.children.data.map((listItem) => {
    return <li key={listItem.id}>{listItem.listName}</li>
  });

  const cards = props.cards.map((cardItem) => {
    return <li 
      key={cardItem.id}
    >
      {cardItem.title}
      <br />
      {cardItem.description}
    </li>
  })
  return (
    <div>
      {props.children.boardName}
      <ul>
        {lists}
      </ul>
      <ul>
        {cards}
      </ul>
    </div>
  );
};

export default CardListItem;