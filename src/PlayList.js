import React from 'react'
import Players from "./Players";
import Cards from './Card';

function PlayerList() {
  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "90px",
        gap: "60%",
        width: "60%",
      }}
    >
      {Players.map((el) => (
        <Cards data={el} key={el.id} />
      ))}
    </div>
  );
}
export default PlayerList;