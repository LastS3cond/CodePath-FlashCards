import React from "react";
import '../index.css';
import {useState} from 'react';

const FlashCards = (props) => {
  const [front, setFront] = useState(true);
  const [index, setIndex] = useState(0);

  const content = [
    ["Wrote the Percy Jackson Series","Rick Riordan"],
    ["Wrote the Harry Potter Series","J.K. Rowling"],
    ["Wrote the Hunger Games Series","Suzanne Collins"],
    ["Wrote the Mortal Instruments Series","Cassandra Clare"],
    ["Wrote the I Am Number Four Series","Pittacus Lore"],
    ["Wrote the Legend Series","Marie Lu"],
    ["Wrote the Maze Runner Series","James Dashner"],
    ["Wrote the Lunar Chronicles Series","Marissa Meyer"],
    ["Wrote the Steampunk Chronicles","Kady Cross"],
    ["Wrote the Uglies Series","Scott Westerfeld"]
   ];

   const[guess, setGuess] = useState("")
   const updateGuess = (event) =>
   {
    setGuess(event.target.value);
   }

  const toggleCard = () => {
    setFront(!front);
  };

  const changeColor = (color) => {
    document.getElementById("guessbox").style.backgroundColor = color;
}

  const checkAnswer = () => {
    if(guess === content[index][1])
    {
      changeColor("forestgreen");
      toggleCard(false);
    }
    else
    {
      changeColor("red");
    }
  };


  const nextCard = () => {
    if(index < content.length - 1)
    {
      setFront(true);
      setIndex(index + 1);
    }
  };

  const prevCard = () => {
    if(index > 0)
    {
      setFront(true);
      setIndex(index - 1);
    }
  }

  return (
    <div>
      <h2 className='counter'> Card {index + 1}! </h2>
      <button className='FlashCard' onClick={toggleCard}>
        <p className="Front">{front ? content[index][0] : content[index][1]}</p>
      </button>
      <div className = "container">
        <div className="Arrow">
          <button onClick={prevCard} > &lt;</button>
        </div>
        <div id="guessbox" className="GuessBox">
            <label>Enter your answer: </label>
            <input value={guess} placeholder="Enter Answer Here!" onChange={updateGuess} />
          <button className="Submit" onClick={checkAnswer}>Submit!</button>
        </div>
        <div className="Arrow">
          <button onClick={nextCard}> &gt;</button>
        </div>
      </div>
    </div>
  );
  };

export default FlashCards;