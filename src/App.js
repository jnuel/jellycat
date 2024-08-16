import './styles.css';
import { useState } from 'react';
import gameData from './GameData';
import startImage from './images/homescreen_inspo.png';

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
  const [endGame, setEndGame] = useState("");
  const [storyImage, setStoryImage] = useState(startImage);

  function startGame() {
    console.log("a");
    if (justStarted) {
      setJustStarted(false);
      setStoryText(gameData[currentState].text);
      setStoryImage(gameData[currentState].image);
      console.log(storyImage);
      console.log("currentState is ", currentState);
    }
  }

  function changeState(newState, selectedPersonalities) {
    console.log(personalities);
    console.log("selected personalities: %s", selectedPersonalities);
    // increase personalities by 1
    const nextPersonalities = personalities;
    selectedPersonalities.forEach(personality => {
      nextPersonalities[personality] = nextPersonalities[personality]+1;
      console.log("personality: ",personality);
    })

    setPersonalities(nextPersonalities);
    setStoryText(gameData[newState].text);  
    // console.log("new image: ","\""+gameData[newState].image+"\"");
    console.log(newState)

    setStoryImage(gameData[newState].image);
    // setStoryImage(require("./smaller_images/2.png"));
    setCurrentState(newState);
    if (newState === 0) {
      revealMostSelectedVegetable();
    }
  }

  function createButtons() {
    // console.log("current state from create buttons: ", currentState);
    const buttonList = [];

    for (const [choice, info] of Object.entries(gameData[currentState].choices)) {
      // console.log("choices: ", gameData[currentState].choices);
      // console.log("choice: ", choice);
      // console.log("info: ", info);
      let nextState = info[0];
      buttonList.push(<div className="choice-button" onClick={() => changeState(nextState, info[1])}>{choice}</div>);
    }
    return buttonList;
  };

  function revealMostSelectedVegetable() {
    console.log("calculating fate");
    let maxCount = 0;
    let maxVeggie = '';

    for (const [vegetable, count] of Object.entries(personalities)){
        if (count > maxCount) {
            maxCount = count;
            maxVeggie = vegetable;
        }
    }
    console.log(maxVeggie);
    setStoryText(`You are a ${maxVeggie}`);
    const veggieImagePath = `smaller_images/id_cards/${maxVeggie}.png`;
    setStoryImage(veggieImagePath);
    setEndGame(true);
  }

  function createShareButton() {
    return (<div className="choice-button" id="choices" onClick={() => {
      const shareMessage = `Check out my Veggie ID! You can create yours at https://jnuel.github.io/jellycat/`;
            navigator.clipboard.writeText(shareMessage).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                alert('Failed to copy link. Please try again.');
            });
          }}>Share the game with friends</div>);
  }

  return (
    <div className="container">
      { justStarted ? (
        <div>
          <div className="title">What Jellycat are you?</div>
          <div className="image-container">
            <img className="home-screen" src={storyImage} alt="Start"/>
            </div>
          <a href="#" className="start-button" onClick={startGame}>Start</a>
        </div>
      ) : (
        <div>
          <div className="game-container" id="game-container">
          <div className="story-text" id="story-text">{storyText}</div>
          <div className="image-container">
                <img id="story-image" src={storyImage} alt="Story"/>
            </div>
              {Object.entries(gameData[currentState].choices)? (
                <div className="choices" id="choices"> {createButtons()}
                </div> ): <div></div>}
            </div>
          <div className="end-div">
            { endGame ? (
              <div> {createShareButton()}
              </div>
            ): <div></div>}
            </div>
        </div>
      )}
    </div>
  );
}

export default Game;
