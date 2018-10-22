import React from 'react';

const CardListItem = (props) => {
  const loading = props.listItems.loading;
  const listsArr = props.listItems.listItems;
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
    <>
      { loading && <div>loading...</div> }
      { !loading && 
        <>{lists}</>
      }
    </>
  );

};


export default CardListItem;