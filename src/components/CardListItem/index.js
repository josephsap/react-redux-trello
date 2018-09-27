import React from 'react';


const CardListItem = (props) => {
  const lists = props.children.data.map((listItem) => {
    return <li key={listItem.id}>{listItem.listName}</li>
  });
  // console.log(Array.isArray(props.cards), '00')
  const cards = props.cards.map((cardItem, index) => {
    console.log(cardItem[index].id)
    return <li 
      key={cardItem[index].id}
    >
      {cardItem[index].title}
      <br />
      {cardItem[index].description}
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