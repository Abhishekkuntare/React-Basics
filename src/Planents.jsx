import React from "react";

export const Planents = () => {
  const planents = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Venus", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];
  return (
    <div>
      {planents &&
        planents.map((planet, key) => (
          <div key={key}> {planet.isGasPlanet ? planet.name : null}</div>
        ))}
    </div>
  );
};
