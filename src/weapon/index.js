import React, { Component } from 'react';
import '../App.css';

import {PATH_BASE,PATH_TYPE,PATH_USER_DATA,PLATPHORM_USER,DEFAULT_QUERY} from "../constants/";


class Weapon extends Component  {
    constructor(props) {
        super(props);

        this.state = {
            result: "",
            error: "",
            weapons: []
        };

        this.setWeapons = this.setWeapons.bind(this); 

    };

    setWeapons(result) {
        this.setState({ result });
        //console.log(this.state);
        const { weapons } = this.state.result;
        this.setState({ weapons });
        
      }

    componentDidMount() {
        fetch("https://fortnite-public-api.theapinetwork.com/prod09/weapons/get")
                .then(response => response.json())
                //.then(response => console.log(response))
                .then(result => this.setWeapons(result))
                .catch(error => this.setState({ error }))
}

  render() {
    const { weapons,result } = this.state;
    if (!result) { return null; }
    console.log(this.state);
    return (
       
        <div className="row">
            
    {weapons.map((weapon,key) => 
             <div div key={key} className="card">
             <span>
             {weapon.rarity} 
             </span> 
             <span>{weapon.name}</span>
             <p>{weapon.stats.dps}</p>
             <p>{weapon.stats.damage.body}</p>
             <p>{weapon.stats.damage.head}</p>
             <img src={weapon.images.image} />
           </div>
         )}   
        </div> 
   
    )
  }
}
export default Weapon