import React, { Component } from 'react';
import Instruction from "../instruction/";
import {StatsList, JustifyRow, SpanUid} from "../style/";

function Total  ({stats, totals, result}){ 
  if (!result) {
    return <Instruction />
  } else {
   return <ListStats 
          result = { result} 
          totals = { totals }
          />
 } 
}



function ListStats({totals, result}){
  return (
    <>
    <div style={StatsList}>
    <div style={JustifyRow}><span>Игровой ник : </span><span>{result.username} </span></div>
    <div style={JustifyRow}><span>Аккаунт : </span><span style={SpanUid}>{result.uid} </span></div>
    <div style={JustifyRow}><span>Матчей сыграно : </span><span>{totals.matchesplayed} </span></div>
    <div style={JustifyRow}><span>Убийств : </span><span>{totals.kills} </span></div>
    <div style={JustifyRow}><span>Побед : </span><span>{totals.wins} </span></div>
    <div style={JustifyRow}><span>Показатель побед : </span><span>{totals.winrate} </span></div>
    </div>
    </>
    );
}

export  default Total;