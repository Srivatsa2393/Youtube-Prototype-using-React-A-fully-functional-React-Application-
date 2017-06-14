import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyBUy6iC5JMIg13Y5wybUmcTgrCyClGDYUM';

//sample search
// YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
//   console.log(data);
// });

//Create a new component. This component should produce some HTML
//refactoring from functional component to class based component
// const App = () => {
//   return(
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component{
constructor(props){
  super(props);

  this.state = {
    videos: []
  };

  YTSearch({key: API_KEY, term: 'arsenal'}, (data) => {
    this.setState({ videos: data });
  });

}

  render() {
    return(
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]}/>
        <VideoList videos= {this.state.videos} />
      </div>
    );
  }
}


//Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
