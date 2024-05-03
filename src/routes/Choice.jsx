import React from "react";
import "../styles/Choice.css";

export default function Choice({ choice, handleChoice }) {
  return (
    <div className="choice">
      <button
        onClick={() => {
          handleChoice(choice[1]);
        }}
      >
        {choice[3]}
      </button>
      <button
        onClick={() => {
          handleChoice(choice[2]);
        }}
      >
        {choice[4]}
      </button>
    </div>
  );
}
