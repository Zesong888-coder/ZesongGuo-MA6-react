import React, {createContext, useContext, useState} from 'react';

export const GridContext = createContext();

export function GridProvider(props) {
  const [count, setCount] = useState(0);
  
  // Set up a state array for each cell
  const [cellSates, setCellStates] = useState([false, false, false, false]);

  // Handle toggle function
  const toggleCell = (index) => {
    setCellStates((prevSates) => {
      const newSates = [...prevSates];
      
      // Toggle the state
      newSates[index] = !newSates[index];

      // Change the count based on the new state
      setCount((prevCount) => prevCount + (newSates[index] ? 1 : -1));

      return newSates;
    })
  }

  return (
    <GridContext.Provider value = {{cellSates, count, toggleCell}}>
      {props.children}
    </GridContext.Provider>
  )
}

