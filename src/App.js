import React, { Component } from 'react';
import './App.css';

import {PATH_BASE,PATH_TYPE,PATH_USER_DATA,PLATPHORM_USER,DEFAULT_QUERY} from "./constants/";
//import Statistic from "./stats/";
import Error from "./error/";
import Total from "./totals/";
import Solo from "./solo/";
import Duo from "./duo/";
import Group from "./group/";
import {ContentBlock} from "./style/";

import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import 'react-web-tabs/dist/react-web-tabs.css';


class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      result: "",
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
  }
  
  render() {  
    const {stats, totals, error , result } = this.state;
    const { errorMessage, numericErrorCode } = this.state.result;

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
           : <Tabs
           defaultTab="one"
           onChange={(tabId) => { console.log(tabId) }}
         >
           <TabList>
             <Tab tabFor="one">Общее</Tab>
             <Tab tabFor="two"> Соло</Tab>
             <Tab tabFor="three">Дуо</Tab>
             <Tab tabFor="four">Группа</Tab>
           </TabList>
           <TabPanel tabId="one">
           <Total 
             result = {result}
             totals = {totals}
             />
           </TabPanel>
           <TabPanel tabId="two">
           <Solo 
             stats = {stats} 
             />
           </TabPanel>
           <TabPanel tabId="three">
           <Duo 
             stats = {stats} 
             />
           </TabPanel>
           <TabPanel tabId="four">
           <Group 
             stats = {stats} 
             />
           </TabPanel>
         </Tabs>
        }
        </div>
        </main>
      
      </div>
    );
  }
}

export default App;
