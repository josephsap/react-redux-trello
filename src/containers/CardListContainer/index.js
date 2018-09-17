import React, { Component } from 'react';
import mapValues from 'lodash/mapValues';
import CardListItem from '../../components/CardListItem';

export class CardListContainer extends Component {

  renderListItems() {
    const { activeBoardData } = this.props;
    if(activeBoardData) {
      const mappedList = mapValues(activeBoardData.data, list => list.name);
      // console.log(activeBoardData.data, '90')
      const mappedKeys = Object.keys(mappedList)
      return mappedKeys.map((listItem, index) => {
        // console.log(listItem, 'h---', activeBoardData.data[listItem].name);
        return <CardListItem id={index} key={index} name={mappedList[listItem]}>{activeBoardData.data[listItem]}</CardListItem>
      });
    }
  }

  render() {

    // console.log(this.props)
    return (
      <div>
        { this.renderListItems() }
      </div>
    );
  }



  
}


export default CardListContainer;


// {this.renderListItems()}