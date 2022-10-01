import React from "react";

const TernaryOprator = () => {
  const age = 17;
  const isGreen = false;
  const fontFamily = true;

  return (
    <div>
      {age >= 18 ? <h1>Allowed</h1> : <h1>Not allowed</h1>}
      <h1
        style={{
          color: isGreen ? "Green" : "red",
          fontFamily: fontFamily ? "cursive" : "monospace",
        }}
      >
        This is color
      </h1>

      {isGreen && <button>I'm Here</button>}
    </div>
  );
};

export default TernaryOprator;
