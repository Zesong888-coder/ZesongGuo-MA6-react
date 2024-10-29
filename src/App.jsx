import React, { useContext } from "react";
import { GridProvider, GridContext } from "./GridContext";
import './App.css'
import { Cell } from "./Cell";

function Grid() {
  const {count} = useContext(GridContext);

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <div className="grid-container">
        <Cell index={0} />
        <Cell index={1} />
        <Cell index={2} />
        <Cell index={3} />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <GridProvider>
      <Grid />
    </GridProvider>
  );
}