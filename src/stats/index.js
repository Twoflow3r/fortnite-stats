import React, { Component } from 'react';

function Statistic  ({stats}){ 
  if (stats === 0) {
    return <Instruction />
  } else {
   return <ListStats stats = {stats} />
 } 
}

function Instruction() {
  return (
    <>
    <p>Введите корректный игровой ник.</p>
    </>
    );
}

function ListStats({stats}){
  return (
    <>
    <span>Убийств в одиночку : {stats.kills_solo} </span>
    <span>Убийств в паре : {stats.kills_duo} </span>
    <span>Убийств в команде : {stats.kills_squad} </span>
    <span>Матчей сыграно в одиночку : {stats.matchesplayed_solo} </span>
    <span>Матчей сыграно в паре : {stats.matchesplayed_duo} </span>
    <span>Матчей сыграно в команде : {stats.matchesplayed_squad} </span>
    <span>Побед соло : {stats.placetop1_solo} </span>
    <span>Побед в паре : {stats.placetop1_duo} </span>
    <span> Побед в команде :{stats.placetop1_squad} </span>
    </>
    );
}

export  default Statistic;