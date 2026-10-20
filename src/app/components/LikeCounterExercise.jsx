"use client";
// Importer CSS filen
import "../component-style/like-counter-exercise.css";
import {useState} from "react";

export default function LikeCounterExercise() {
  // TODO for studerende: Opret state variabler

  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  // TODO for studerende: Implementer handleLike funktionen

  return (
    <div className="exercise-container">
      <div className="post-card">
        {/* Header */}
        <div className="post-header">
          <h1 className="exercise-title">Like Counter Øvelse</h1>
          <p className="exercise-description">
            Få opslagets like-knap til at tælle likes
          </p>
        </div>

        {/* Post indhold */}
        <div className="post-content">
          <div className="post-image">
            <span className="post-image-text">🎉</span>
          </div>
          <p className="post-text">
            Dette er et fantastisk opslag! Klik på like-knappen nedenfor for at
            vise din støtte. Knappen skal skifte farve og tælleren skal
            opdateres.
          </p>
        </div>

        {/* Like sektion */}
        <div className="like-section">
          <button
            // TODO for studerende: Tilføj liked class hvis isLiked er true
            className={`like-button ${isLiked === true ? "liked" : ""}`}
            // TODO for studerende: Tilføj onClick
            onClick={() => {
              setIsLiked(!isLiked);
              setLikes((antal) => antal + (isLiked ? -1 : 1));
            }}
          >
            {/* TODO for studerende: Vis det rigtige hjertet (❤️ / 🤍) i span elementet herunder  */}
            <span className="heart-icon">
              {isLiked === false ? "🤍" : "❤️"}
            </span>
            {isLiked === true ? "Liked" : "Like"}
            {/* Hint: Brug en ternary operator */}
          </button>

          <div className="like-count">
            {/* TODO for studerende: Vis antallet af likes */}
            {/* Hint: Brug likes state variablen */}
            {likes}
            {likes === 1 ? " Like" : " Likes"}
          </div>
        </div>

        {/* Hjælpe information */}
        <div className="help-section">
          <h3 className="help-title">🎯 Opgave:</h3>
          <ul className="help-list">
            <li>Importer useState fra React</li>
            <li>Opret likes state (starter på 0)</li>
            <li>Opret ex. isLiked state (starter på false)</li>
            <li>
              Implementer handleLike funktionen <br />
              <span className="text-blue-700">
                (har ikke gjort cause what dat mean)
              </span>
            </li>
            <li>Toggle isLiked og opdater likes tælleren</li>
            <li>Se like-knappen skifte farve og tælleren opdatere!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
