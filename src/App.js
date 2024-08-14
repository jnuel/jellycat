import './styles.css';
import { createRef, useState } from 'react';
import gameData from './GameData';

const personalities_initial_state = {
  "jellycat1": 0,
  "jellycat2": 0,
  "jellycat3": 0,
  "jellycat4": 0
};


function Game() {
  const [currentState, setCurrentState] = useState(1);
  const [personalities, setPersonalities] = useState(personalities_initial_state);
  const [justStarted, setJustStarted] = useState(true);
  const [storyText, setStoryText] = useState("");

  function startGame() {
    console.log("a");
    if (justStarted) {
      setJustStarted(false);
      setStoryText(gameData[currentState].text);
      console.log("currentState is ", currentState);
    }
  }

  function renderState() {
    console.log("b");
    console.log("current state: ", currentState);
    if (currentState === 0) {
      revealMostSelectedVegetable();
    }
    else {
      console.log("currentState is ", currentState);
      setStoryText(gameData[currentState].text);
    }
  }

  function createButtons() {
    // console.log("current state from create buttons: ", currentState);
    const buttonList = [];

    for (const [choice, info] of Object.entries(gameData[currentState].choices)) {
      console.log("choices: ", gameData[currentState].choices);
      console.log("choice: ", choice);
      console.log("info: ", info);
      let nextState = info[0];
      buttonList.push(<div className="choice-button" id="choices" onClick={() => changeState(nextState, info[1])}>{choice}</div>);
    }
    return buttonList;
  };



  function changeState(newState, selectedPersonalities) {
    // console.log(personalities);
    // console.log("selected personalities %s", selectedPersonalities);
    // // increase personalities by 1
    // const nextPersonalities = {...personalities};
    // for (const key in selectedPersonalities) {
    //   nextPersonalities[key]++;
    // }
    // console.log(selectedPersonalities);
    // console.log("nextpersonalities post set ", nextPersonalities);

    // setPersonalities(nextPersonalities);
    // console.log("personalities post set ", personalities);
    setCurrentState(newState);
    setStoryText(gameData[newState].text);

    if (newState === 0) {
      revealMostSelectedVegetable();
    }

  }

  function revealMostSelectedVegetable() {
    console.log("calculating fate");
  }

  return (
    <div className="container">
      { justStarted ? (
        <div>
          <div className="title">What Jellycat are you?</div>
          <a href="#" className="start-button" onClick={startGame}>Start</a>
        </div>
      ) : (
        <div>
          <div className="game-container" id="game-container"></div>
          <div className="story-text" id="story-text">{storyText}</div>
          <div className="mainChoices">
              {Object.entries(gameData[currentState].choices)? (
                <div> {createButtons()}
                </div> ): <div></div>}
            </div>
        </div>
      )}
    </div>
  );
}

export default Game;
