import React from 'react';
import CreateTaskContainer from '../../containers/CreateTaskContainer';

const CardListItem = (props) => {
  const loading = props.loading;
  const listsArr = props.activeBoard;
  console.log(props, 'h000000')
  let lists;
  if(listsArr !== []) {
    lists = listsArr.map((list) => {
      return (
        <div key={list.id}>
          <h3>{list.listName}</h3>
          <ul>
            {
              list.cards !== undefined &&
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
          <div>make this activate a modal.
            <CreateTaskContainer 
              {...props}
              activeListId={list.id}
              activeBoardId={props.activeBoardId}
            />
          </div>
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