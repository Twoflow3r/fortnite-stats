import React, { Component } from 'react';
import Instruction from "../instruction/";
import {StatsList, JustifyRow} from "../style/";

function Duo  ({stats}){ 
  if (!stats) {
    return <Instruction />
  } else {
   return <ListStats 
          stats = { stats} 
          />
 } 
}

function ListStats({stats}){
  return (
    <>
    <div style={StatsList}>
    <div style={JustifyRow}><span>Матчей  : </span><span> {stats.matchesplayed_duo} </span></div>
    <div style={JustifyRow}><span>Убийств :  </span><span>{stats.kills_duo} </span></div>
    <div style={JustifyRow}><span>Побед  :  </span><span>{stats.placetop1_duo} </span></div>
    <div style={JustifyRow}><span>В top 5 лучших пар :  </span><span>{stats.placetop5_duo} </span></div>
    <div style={JustifyRow}><span>В top 12 лучших пар :  </span><span>{stats.placetop12_duo} </span></div>
    <div style={JustifyRow}><span>Очков :  </span><span>{stats.score_duo} </span></div>
    <div style={JustifyRow}><span>Win rate : </span><span> {stats.winrate_duo} </span></div>
    </div>
    </>
    );
}

export  default Duo;