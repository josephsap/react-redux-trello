import React from 'react';

const CardListItem = (props) => {
  console.log(props, 'card list item')
  const loading = props.loading;
  const listsArr = props.activeBoard;
  let lists;
  if(listsArr !== []) {
    lists = listsArr.map((list) => {
      return (
        <div key={list.id}>
          <h3>{list.listName}</h3>
          <ul>
            {
              list.cards.map((card) => {
                return (
                  <li key={card.id}>
                    <p>{card.cardName}</p>
                    <p>{card.cardDescription}</p>
                  </li>
                )
              })
            }
          </ul>
        </div>
      );
    });
  }


  return (
    <div>
      { loading && <div>loading...</div> }
      { !loading && 
        <div>{lists}</div>
      }
    </div>
  );

};


export default CardListItem;
