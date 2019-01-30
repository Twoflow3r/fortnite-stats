import React, { Component } from 'react';
import Instruction from "../instruction/";
import {StatsList, JustifyRow} from "../style/";

function Solo  ({stats}){ 
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
     <div style={JustifyRow}><span>Матчей  :  </span><span>{stats.matchesplayed_solo} </span></div>
     <div style={JustifyRow}><span>Убийств : </span><span> {stats.kills_solo} </span></div>
     <div style={JustifyRow}><span>Побед  :  </span><span>{stats.placetop1_solo} </span></div>
     <div style={JustifyRow}><span>В top 10 лучших : </span><span> {stats.placetop10_solo} </span></div>
     <div style={JustifyRow}><span>В top 25 лучших : </span><span> {stats.placetop25_solo} </span></div>
     <div style={JustifyRow}><span>Очков :  </span><span>{stats.score_solo} </span></div>
     <div style={JustifyRow}><span>Win rate :  </span><span>{stats.winrate_solo} </span></div>
    </div>
    </>
    );
}

export  default Solo;