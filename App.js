import React, { useState, useEffect } from "react";

const spacePhenomena = [
  { id: 1, name: "Asteroid Belt", emoji: "☄️" },
  { id: 2, name: "Galactic Nebula", emoji: "🌌" },
  { id: 3, name: "Black Hole", emoji: "🕳️" },
  { id: 4, name: "Supernova Explosion", emoji: "💥" },
  { id: 5, name: "Pulsar", emoji: "⚡" },
  { id: 6, name: "Quasar", emoji: "💫" },
  { id: 7, name: "Exoplanet", emoji: "🪐" },
  { id: 8, name: "Interstellar Cloud", emoji: "☁️" },
  { id: 9, name: "Gamma-Ray Burst", emoji: "🌠" },
  { id: 10, name: "Magnetic Field Reversal", emoji: "🧲" },
];

const observationStatuses = ["🔭 Visible", "🌫 Faint", "🚀 Prime for Study"];

function assignStatus() {
  return spacePhenomena.map((item) => ({
    ...item,
    status:
      observationStatuses[
        Math.floor(Math.random() * observationStatuses.length)
      ],
  }));
}
function App() {
  const [phenomena, setPhenomena] = useState([]);
  useEffect(() => {
    setPhenomena(assignStatus());
  }, []);

  return (
    <div>
      {phenomena.map((phenom, idx) => (
        <div key={idx}>
          <span>{phenom.emoji}</span> <strong>{phenom.name}</strong>
          <em>{phenom.status}</em>
          {phenom.status === "🚀 Prime for Study" && (
            <div style={{ color: "gold", fontWeight: "bold" }}>
              Explorers it's time to bring out the big ones - advanced equipment
              time!
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
