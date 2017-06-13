import React, { Component } from 'react';

// const SearchBar = () => {
//   return <input />;
// }

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(event){
    console.log(event.target.value);
  }

  render() {
    return(
      <input onChange={this.onInputChange} />
    );
  }
}

export default SearchBar;
