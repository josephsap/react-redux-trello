import React from 'react';
import _ from 'lodash';


const CardListItem = (props) => {
  const parentListItems = [];
  let rows = [];
  const lists = props.children.data.map((listItem) => {
    parentListItems.push(listItem);
    return <li key={listItem.id} id={"list-" + listItem.id}>{listItem.listName}</li>
  });

  const loading = props.cards.loading;
  const cardsArr = props.cards.cards;
  const merged = [].concat.apply([], cardsArr);
  // console.log(parentListItems, '09')


  //   render(){
  //     let rows = [];
  //     for (var i = 0; i < this.state.size; i++){
  //       let rowID = `row${i}`
  //       let cell = []
  //       for (var idx = 0; idx < this.state.size; idx++){
  //         let cellID = `cell${i}-${idx}`
  //         cell.push(<td key={cellID} id={cellID}></td>)
  //       }
  //       rows.push(<tr key={i} id={rowID}>{cell}</tr>)
  //     }





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


//   constructor(props){
//     super(props);
//     this.state = {size: 3}
//   }
//   render(){
//     let rows = [];
//     for (var i = 0; i < this.state.size; i++){
//       let rowID = `row${i}`
//       let cell = []
//       for (var idx = 0; idx < this.state.size; idx++){
//         let cellID = `cell${i}-${idx}`
//         cell.push(<td key={cellID} id={cellID}></td>)
//       }
//       rows.push(<tr key={i} id={rowID}>{cell}</tr>)
//     }
//     return(
//       <div className="container">
//         <div className="row">
//           <div className="col s12 board">
//             <table id="simple-board">
//                <tbody>
//                  {rows}
//                </tbody>
//              </table>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

export default CardListItem;