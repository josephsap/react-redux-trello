import React, { Fragment } from 'react';

const CardListItem = (props) => {
  const loading = props.listItems.loading;
  const listsArr = props.activeBoardData.lists;
  console.log(props, '45676')
  let lists;
  if(listsArr !== []) {
    lists = listsArr.map((list) => {
      console.log(list, 'list')
      return (
        <div key={list.id}>
          <h3>{list.listName}</h3>

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
{/*
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
*/}


export default CardListItem;