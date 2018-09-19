import React, { Component } from 'react';
import mapValues from 'lodash/mapValues';
import CardListItem from '../../components/CardListItem';

export class CardListContainer extends Component {

  renderListItems() {
    const { activeBoardData } = this.props;
    if(activeBoardData) {
      const mappedList = mapValues(activeBoardData.data, list => list.name);
      const mappedKeys = Object.keys(mappedList)
      return mappedKeys.map((listItem, index) => {
        return <CardListItem id={index} key={index} name={mappedList[listItem]}>{activeBoardData.data[listItem]}</CardListItem>
      });
    }
  }

  render() {
    return (
      <div>
        { this.renderListItems() }
      </div>
    );
  }



  
}


export default CardListContainer;
