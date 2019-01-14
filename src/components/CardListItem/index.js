import React, { Fragment } from 'react';
import CreateTaskContainer from '../../containers/CreateTaskContainer';
import './style.css';

const CardListItem = (props) => {
  const loading = props.loading;
  const listsArr = props.activeBoard;
  let lists;
  if(listsArr !== []) {
    lists = listsArr.map((list) => {
      return (
        <div key={list.id} className="singleColumn">
          <div className="one">
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
          </div>
          <div className="two" style={{position: 'relative'}}>
            <CreateTaskContainer 
              {...props}
              activeListId={list.id}
              activeList={list}
              activeBoardId={props.activeBoardId}
              activeBoard={listsArr}
            />
          </div>
        </div>
      );
    });
  }


  return (
    <Fragment>
      { loading && <div>loading...</div> }
      { !loading && 
        <div className="columnsWrapper">{lists}</div>
      }
    </Fragment>
  );

};


export default CardListItem;