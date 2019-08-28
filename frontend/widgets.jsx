import React from 'react';
import ReactDOM from "react-dom";
import Clock from './clock';
import Tab from './tabs';
import Weather from './weather';

document.addEventListener("DOMContentLoaded", () => {
  let root = document.getElementById("root"); 

  let tabs = [
    {title: "one", content: "I am the first"},
   {title: "two", content: "I am the second"},
   {title: "three", content: "I am the third"}
  ];

  ReactDOM.render(
  <div> 
    <Clock /> 
    <Tab tabs={tabs} /> 
    <Weather /> 

   </div> 
   ,root);
});
