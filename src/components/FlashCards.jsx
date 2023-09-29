import React from "react";
import '../index.css';
import {useState} from 'react';

const FlashCards = (props) => {
  const [front, setFront] = useState(true);
  const [index, setIndex] = useState(0);

  const toggleCard = () => {
    setFront(!front);
  };


  const nextCard = () => {
    while(Math.floor(Math.random() * 8) == index);
    setIndex(Math.floor(Math.random() * 8));
  };

  const prevCard = () => {
    while(Math.floor(Math.random() * 8) == index);
    setIndex(Math.floor(Math.random() * 8));
    }

  const content = [
   ["Lists","A data structure that allows access to all elements by index."],
   ["Queue","A data structure that adds to the back and removes from the front."],
   ["Stack","A data structure that adds to the back and removes from the back."],
   ["Deque","A data structure that allows addition and removal from both ends."],
   ["Set","A data structure that doesn't allow repetition, and is not indexed. Quick operations."],
   ["Map","A data structure that \"maps\" a key to a value. Not indexed, quick operations."],
   ["PriorityQueue","A data structure that allows removal at one end, which always has the \"maximum\" which can be defined by the user. Non-indexed, but ordered as elements are removed."],
   ["LinkedList","Implementation of a List, using node objects such that each node contains a reference to the next. O(n) search, but O(1) removal and addition once target index is reached."],
   ["ArrayList","Implementation of a List, using node objects such that each node contains a reference to the next. O(1) search, but O(n) removal and addition once target index is reached."]
  ];

  return (
    <div>
      <button className='text' onClick={toggleCard}>
        {front ? <p className="Front">{content[index][0]}</p> : content[index][1]}
        </button>
    <div className = "container">
            <div className="Arrow">
              <button onClick={prevCard}> &lt;</button>
            </div>
                <div className="Arrow">
              <button onClick={nextCard}> &gt;</button>
            </div>
        </div>
    </div>
  );
  };

export default FlashCards;