import React, { Component } from 'react';

const ErrorBlock = {
    
}

const Error = ({ errorMessage, numericErrorCode }) => 
    <div style = {ErrorBlock}>
         <p> Произошла ошибка получения данных. </p>
         <p>{errorMessage}</p> 
         <p>{numericErrorCode}</p> 
         <p>Видимо такого пользователя с заданным именем нет, либо он использует другую игровую платформу</p> 
        </div>
         
export  default Error;