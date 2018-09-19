import React from 'react';


const CardListItem = (props) => {

  const listName = props.children.name;
  const cards = props.children.cards;
  const renderCardItems = cards.map((card) => {
    return (
      <div key={card.cardId}>
        <h3>{card.name}</h3>
        <p>{card.description}</p>
      </div>
    );
  });

  return (
    <div>
      { listName }
      { renderCardItems }
    </div>
  );
};

export default CardListItem;