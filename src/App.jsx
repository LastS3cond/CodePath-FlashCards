import './App.css';
import FlashCards from './components/FlashCards'
import { useState } from 'react';

const App = () => {
  const maxCards = 8;
  const minCards = 0;
  const [cardIndex, setCardIndex] = useState(0);

  
  return (
    <div className="App">
      <div className="header">
        <h1>Data Structures Flashcards</h1>
        <h2>Here we have a total of {maxCards} Flashcards for interview prep!</h2>
      </div>
      <div className="FlashCards">
            <FlashCards index = {cardIndex}></FlashCards>
      </div>
    </div>
  )
}

export default App