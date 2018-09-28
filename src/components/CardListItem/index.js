import React from 'react';
import _ from 'lodash';


const CardListItem = (props) => {
  const lists = props.children.data.map((listItem) => {
    return <li key={listItem.id}>{listItem.listName}</li>
  });

  const loading = props.cards.loading;
  const cardsArr = props.cards.cards;
  const merged = [].concat.apply([], cardsArr);

  const cards = merged.map((cardItem) => {
   // console.log(cardItem, "-----")
    return <li 
      key={cardItem.id}
    >
      {cardItem.title}
      <br />
      {cardItem.description}
    </li>
  });


  return (
    <div>
      {props.children.boardName}
      <h2>{lists}</h2>
      { loading && <div>loading...</div> }
      { !loading &&
        <ul>
          {cards}
        </ul>
      }
    </div>
  );

};

export default CardListItem;