import React from 'react';
import _ from 'lodash';


const CardListItem = (props) => {
  const parentListItems = [];
  const lists = props.children.data.map((listItem) => {
    parentListItems.push(listItem);
    return <li key={listItem.id} id={"list-" + listItem.id}>{listItem.listName}</li>
  });

  const loading = props.cards.loading;
  const cardsArr = props.cards.cards;
  const merged = [].concat.apply([], cardsArr);
  // console.log(parentListItems, '09')
  const cards = merged.map((cardItem, index) => {
  console.log(parentListItems[index], "-----")
  // if(parentListItems[index].boardId) {
  //   if(cardItem.cardListId === parentListItems[index].boardId) {
      
  //    return <div key={parentListItems[index].id}>{parentListItems[index].name}
  //      <li 
  //         key={cardItem.id}
  //         id={cardItem.id}
  //       >
  //         {cardItem.title}
  //       <br />
  //       {cardItem.description}
  //     </li>
  //     </div>
  //   }
  //   // return <li 
  //   //     key={cardItem.id}
  //   //     id={cardItem.id}
  //   //   >
  //   //     {cardItem.title}
  //   //   <br />
  //   //   {cardItem.description}
  //   //   {cardItem.cardListId}
  //   // </li>
  
  //  }
  });


  return (
    <div>
      {props.children.boardName}
    
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