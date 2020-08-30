import React, { Component } from 'react';

export default function Persons(props) {
    return(
        <div> 
            <h1>{props.value}</h1>
             
            <ul>
               {props.person.map((person => 
                <li key={person.id}>    
                <span id={person.id}>My name is {person.name}, I am {person.age} years old</span>
                </li>
               ))}    
            </ul> 

        </div>       
    );
}