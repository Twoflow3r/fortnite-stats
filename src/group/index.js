import React, { Component } from 'react';
import Instruction from "../instruction/";
import {StatsList, JustifyRow} from "../style/";


function Group  ({stats}){ 
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
     <div style={JustifyRow}><span>Матчей  :  </span><span>{stats.matchesplayed_squad} </span></div>
     <div style={JustifyRow}><span>Убийств : </span><span> {stats.kills_squad} </span></div>
     <div style={JustifyRow}><span>Побед  : </span><span> {stats.placetop1_squad} </span></div>
     <div style={JustifyRow}><span>В top 3 лучших :  </span><span>{stats.placetop3_squad} </span></div>
     <div style={JustifyRow}><span>В top 6 лучших :  </span><span>{stats.placetop6_squad} </span></div>
     <div style={JustifyRow}><span>Очков : </span><span> {stats.score_squad} </span></div>
     <div style={JustifyRow}><span>Win rate : </span><span> {stats.winrate_squad} </span></div>
    </div>
    </>
    );
}

export  default Group;