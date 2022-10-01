import React from "react";
import { useState } from "react";

const AbhiUseState = () => {
  const [state, setState] = useState(0);
  const [input, setInput] = useState(0);
  const [galaxy, setGalaxy] = useState(true);
  const [textColor, setTextColor] = useState("black");

  console.log(state);

  const add = () => {
    setState(state + 10);
  };
  const sub = () => {
    setState(state - 10);
  };

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const showHideGalaxy = () => {
    setGalaxy(!galaxy);
  };

  const changeColor = () => {
    setTextColor(textColor === "black" ? "Orange" : "black");
  };

  return (
    <div>
      <button onClick={(() => setState(state + 1), add)}>+</button>
      <span>
        <b>{state}</b>
      </span>
      <button onClick={(() => setState(state - 1), sub)}>-</button>

      <div>
        <input type="text" onChange={handleInput} />
        <input type="text" onChange={(e) => setInput(e.target.value)} />
        <h1>{input}</h1>

        <div>
          <button onClick={showHideGalaxy}>Show/Hide</button>
          <h1>{galaxy && "I Love my galaxy"}</h1>

          <button onClick={changeColor}>Change the color </button>
          <h1 style={{ color: textColor }}>I'm Change my color </h1>
        </div>
      </div>
    </div>
  );
};

export default AbhiUseState;
