import logo from './logo.svg';
import search from './search.png';
import './App.css';
import { useState } from 'react';

function block(name,number){
  return(
    <div className="pokemonBox">
      <div className="name">{name}</div>
      <div className="number">{number}</div>
      </div>

  );
}

function App() {
  const mystyle = {
    width :30,
    height: 30
  };
  return (

      <div>
      <h2 className="Titlu">Pokedex</h2>
      <div class="container">
      {/* <img className="Img" src={search} alt="Search" style={mystyle}/> */}
      <input className="InputBox" type={"text"} placeholder="Search pokemon name, number or type" >
      </input>
      </div>
      <div className='block-display'>
      {block("Bulbasaur","#001")} {block("Ivysaur","#002")} {block("Venusaur","#003")}
      {block("Charmander","#004")} {block("Charmeleon","#005")} {block("Charizard","#006")}
      {block("Squirtle","#007")} {block("Wartortle","#008")} {block("Blastoise","#009")}
      {block("Pikachu","#025")} {block("Eevee","#133")} {block("Gengar","#094")}
      </div>
      
    </div>

    
  );
}

export default App;
