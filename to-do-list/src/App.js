import logo from './logo.svg';
import search from './search.png';
import './App.css';
import { useState } from 'react';

function block(name,number,obj1,obj2,img){
  const green={
    backgroundColor:'rgb(100,190,50)'
  }
  return(
    <div>
      <div className="name">{name}</div>
      <div className="number">{number}</div>
      <div className="container">
      <div className="text-block">
      <div className="blocks1">{obj1}</div>
      <div className="blocks2">{obj2}</div>
      </div>
      <img src={img} alt="1"  className="image_pokemon"></img>
      </div>
      
      
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
      <p className="pokemonBox" style={{backgroundColor:'rgb(100,190,50)'}}>{block("Bulbasaur","#001","Grass","Poison","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png") }</p>
      <p className="pokemonBox" style={{backgroundColor:'rgb(100,190,50)'}}>{block("Ivysaur","#002","Grass","Poison","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png")} </p>
      <p className="pokemonBox" style={{backgroundColor:'rgb(100,190,50)'}}>{block("Venusaur","#003","Grass","Poison","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png")}</p>
      
      <p className="pokemonBox" style={{backgroundColor:'rgb(204,105,0)'}}>{block("Charmander","#004","Fire","","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png")} </p>
      <p className="pokemonBox" style={{backgroundColor:'rgb(204,105,0)'}}>{block("Charmeleon","#005","Fire","","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png")} </p>
      <p className="pokemonBox" style={{backgroundColor:'rgb(204,105,0)'}}>{block("Charizard","#006","Fire","Flying","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png")}</p>
      
      <p className="pokemonBox" style={{backgroundColor:'rgb(90,172,228)'}}>{block("Squirtle","#007","Water","","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png")} </p>
      <p className="pokemonBox" style={{backgroundColor:'rgb(90,172,228)'}}>{block("Wartortle","#008","Water","","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/8.png")} </p>
      <p className="pokemonBox" style={{backgroundColor:'rgb(90,172,228)'}}>{block("Blastoise","#009","Water","","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/9.png")}</p>
      
      <p className="pokemonBox" style={{backgroundColor:'rgb(250,220,70)'}}>{block("Pikachu","#025","Electric","","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png")} </p>
      <p className="pokemonBox" style={{backgroundColor:'rgb(162,140,95)'}}>{block("Eevee","#133","Normal","","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png")}</p> 
      <p className="pokemonBox" style={{backgroundColor:'rgb(155,95,162)'}}>{block("Gengar","#094","Ghost","Poison","https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png")}</p>
      </div>
      
    </div>

    
  );
}

export default App;
