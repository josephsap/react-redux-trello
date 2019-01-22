import React, { Fragment } from 'react';
import CreateTaskContainer from '../../containers/CreateTaskContainer';
import './style.css';

const CardListItem = (props) => {
  const loading = props.loading;
  const listsArr = props.activeBoard;
  let lists;
  const modalToggle = props.modalOpen ? 'modalShowing' : '';
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
                      <li key={card.id} className="cardItem">
                        <button
                          onClick={() => props.controlFunction(card.id, list.id)}
                        >
                          delete card
                        </button>
                        <button
                          onClick={() => props.moveFunction(card.id, list.id)}
                        >
                          move card
                        </button>
                        <p>{card.cardName}</p>
                        <p>{card.cardDescription}</p>
                        <div className={`moveModal ${modalToggle}`}>
                          Move Modal Open {card.cardDescription}
                          {props.moveCardSelect}
                          <button
                            onClick={() => props.moveFunction(card.id)}
                          >
                            close
                          </button>
                        </div>
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