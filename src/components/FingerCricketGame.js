import React, { useState } from "react";
import "../styles/FingerCricketGame.css";
import Scoreboard from "./Scoreboard";


import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";
import six from "../assets/6.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpg";
import ten from "../assets/10.jpg";

const images = [one, two, three, four, five, six, seven, eight, nine, ten];

const FingerCricketGame = () => {
  const [userScore, setUserScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);
  const [userChoice, setUserChoice] = useState(null);
  const [aiChoice, setAiChoice] = useState(null);
  const [message, setMessage] = useState("You're batting first!");
  const [userBatting, setUserBatting] = useState(true);
  const [gameOver, setGameOver] = useState(false);

  const handleChoice = (num) => {
    if (gameOver) return;

    const aiNum = Math.floor(Math.random() * 10) + 1;
    setUserChoice(num);
    setAiChoice(aiNum);

    if (userBatting) {
      
      if (num === aiNum) {
        setMessage("You're OUT! Now AI will bat.");
        setUserBatting(false);
      } else {
        setUserScore(userScore + num);
        setMessage(`You scored ${num} runs!`);
      }
    } else {
      
      if (num === aiNum) {
        setMessage(`AI is OUT! ${userScore > aiScore ? "You Win!" : userScore === aiScore ? "It's a Tie!" : "AI Wins!"}`);
        setGameOver(true);
      } else {
        setAiScore(aiScore + aiNum);
        if (aiScore + aiNum > userScore) {
          setMessage("AI Wins!");
          setGameOver(true);
        }
      }
    }
  };

  const resetGame = () => {
    setUserScore(0);
    setAiScore(0);
    setUserChoice(null);
    setAiChoice(null);
    setUserBatting(true);
    setGameOver(false);
    setMessage("You're batting first!");
  };

  return (
    <div className="game-container">
      <h1>Finger Cricket Game 🏏</h1>
      <p className="message">{message}</p>

      <Scoreboard userScore={userScore} aiScore={aiScore} />

      {userChoice !== null && aiChoice !== null && (
        <div className="result">
          <div>
            <p>Your Choice:</p>
            <img src={images[userChoice - 1]} alt={`You chose ${userChoice}`} />
          </div>
          <div>
            <p>AI Choice:</p>
            <img src={images[aiChoice - 1]} alt={`AI chose ${aiChoice}`} />
          </div>
        </div>
      )}

      {!gameOver && (
        <div className="hand-options">
          {images.map((img, index) => (
            <button key={index} onClick={() => handleChoice(index + 1)}>
              <img src={img} alt={`Hand ${index + 1}`} />
            </button>
          ))}
        </div>
      )}

      {gameOver && <button className="reset-btn" onClick={resetGame}>Restart Game</button>}
    </div>
  );
};

export default FingerCricketGame;
