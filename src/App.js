import React, { Component } from 'react';
import './App.css';

import {PATH_BASE,PATH_TYPE,PATH_USER_DATA,PLATPHORM_USER,DEFAULT_QUERY} from "./constants/";
import Statistic from "./stats/";
import Error from "./error/";

const ContentBlock = {
  display: "flex",
  flexDirection: "column",
  alignItems: "start",
  width: "290px",
  fontSize: "14px",
  textAlign: "left"
}

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      result: [],
      searchQuery: DEFAULT_QUERY,
      uid: "",
      selectValue: 0,
      stats: 0,
      totals: 0,
      error: null
    };
   
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.setSearchPlayerStatsFull = this.setSearchPlayerStatsFull.bind(this);
    this.fetchSearchPlayer = this.fetchSearchPlayer.bind(this); 
    this.fetchSearchPlayerUid = this.fetchSearchPlayerUid.bind(this); 
    this.setSearchPlayerStatsFull = this.setSearchPlayerStatsFull.bind(this); 
  }

  handleChange(event) {
    this.setState({
      searchQuery: event.target.value
    });
  }
    

  handleChangeSelect(event) {
    this.setState({
      selectValue: event.target.value
    });
  }

  handleSubmit(event) {
    const {
      searchQuery
    } = this.state;
    this.fetchSearchPlayerUid(searchQuery);
    event.preventDefault();
  }

  setSearchPlayerStats(uid) {
    this.setState({
       uid
    });
  }

  setSearchPlayerStatsFull(result) { 
    this.setState({ result });

    const { stats, totals,error} = this.state.result;

    this.setState({ stats, totals, error
    });
  }
  

  fetchSearchPlayerUid() {
    const { searchQuery } = this.state;

    fetch(`${PATH_BASE}${PATH_TYPE}${searchQuery}`)
      .then(response => response.json())
      .then(response => response.uid)
      .then(uid => this.setSearchPlayerStats(uid))
      .then(result => this.fetchSearchPlayer(result))
      .catch(error => this.setState({ error }));
  }

  fetchSearchPlayer() {
    const { uid } = this.state;
    fetch(`${PATH_BASE}${PATH_USER_DATA}${uid}${PLATPHORM_USER[this.state.selectValue]}`)
      .then(response => response.json())
      .then(result => this.setSearchPlayerStatsFull(result))
      .catch(error => this.setState({ error }))
    console.log(this.state);
  }
  
  render() {  
    const {stats, totals, error  } = this.state;
    const { errorMessage, numericErrorCode } = this.state.result;
    console.log(this.state);
    //console.log(this.state.result);
    //console.log(this.state.stats);
    console.log(this.state.error);

    return (
      <div className="App">
        <main className="App-main">
         <h1>Fortnite Stats</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
            Имя:
            <input type="text" required placeholder="ninja" value={this.state.searchQuery} onChange={this.handleChange} />
            </label>
            <label>
            Платформа:
            <select  value={this.state.selectValue} onChange={this.handleChangeSelect}>
            <option value="0">ПК</option>
            <option value="1">ПС 4</option>
            </select>
            </label>
            <input className="btn" type="submit" value="Отправить" />
            </form>
            <div style={ContentBlock}>
      {
        error ? <Error
          errorMessage = {errorMessage}
          numericErrorCode = {numericErrorCode}
           />
          : <Statistic 
          stats = {stats} 
          />
        }
        </div>
        </main>
      </div>
    );
  }
}

export default App;
