import React from "react";
import User from "./User";

const Lists = () => {
  const names = ["abhishek", "pravin", "meena", "anikeet"];

  const users = [
    { name: "abhishek", age: 19 },
    { name: "aniket", age: 21 },
    { name: "saharsh", age: 19 },
  ];

  return (
    <div>
      {names[0]}
      {names.map((name, key) => (
        <h1 key={key}>{name}</h1>
      ))}

      <br />

      {users.map((data, key) => {
        return (
          <div key={key}>
            <User name={data.name} age={data.age} />
          </div>
        );
      })}
    </div>
  );
};

export default Lists;
