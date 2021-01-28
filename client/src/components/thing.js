import React, { Component } from 'react';

export class thing extends Component {
  sortByName = () => {
    this.sortByName = this.sortByName.bind(this);
    this.istate.filteredResult.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  };

  render() {
    return <div></div>;
  }
}

export default thing;
