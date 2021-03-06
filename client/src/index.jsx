import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  search (term) {
    console.log(`${term} was searched`);
    let data = {username: term};

    // TODO
    $.ajax ({
      //url:'http://127.0.0.1:1128/repos',
      url:'/repos',
      method: 'POST',
      data: data,
      dataType:'json',
      success: (data) => {
        console.log('success sending request', data);
        $.ajax({
          url:'/repos',
          method: 'GET',
          success: (data) => {
            this.setState({
              repos: data
            },()=>{});
          }

        })

      },
      error: (error) => {
        console.log(error);
      }

    });


  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));