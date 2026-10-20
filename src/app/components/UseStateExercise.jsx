"use client";
import "../component-style/useState-exercise.css";
import {useState} from "react";

export default function UseStateExercise() {
  // TODO for studerende: Opret en state variabel til at gemme teksten
  const [tekst, setTekst] = useState("Skriv noget");

  return (
    <div className="exercise-container">
      <div className="exercise-card">
        <div className="card-header">
          <h1 className="card-title">Velkommen!</h1>
          <p className="card-description">
            Få input-feltet til at opdatere overskriften i real-tid
          </p>
        </div>

        <div className="card-content">
          {tekst}
          <div className="title-display">
            <h2>{tekst}</h2>
          </div>
          <div className="input-group">
            <label htmlFor="tekst-input" className="input-label">
              Skriv din tekst her:
            </label>
            <input
              id="tekst-input"
              type="text"
              placeholder="Indtast din tekst..."
              className="text-input"
              // TODO for studerende: Tilføj value og onChange props
              value={tekst}
              onChange={(e) => setTekst(e.target.value)}
            />
          </div>
          <div className="help-box">
            <h3 className="help-title">🎯 Opgave:</h3>
            <ul className="help-list">
              <li>1. Importer useState fra React</li>
              <li>2. Opret en state variabel til teksten</li>
              <li>3. Tilføj value og onChange til input-feltet</li>
              <li>4. Se overskriften opdatere i real-time!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
