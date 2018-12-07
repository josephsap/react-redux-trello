import React, { Fragment } from 'react';

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
    <Fragment>
      { loading && <div>loading...</div> }
      { !loading && 
        <Fragment>{lists}</Fragment>
      }
    </Fragment>
  );

};


export default CardListItem;