const gameData = {
    "1": {
      "text": "It's the beginning of the game.",
      "choices": {
        "ok i'll stay here": [2, ["jellycat1, jellycat2"]],
        "no": [2, ["jellycat1, jellycat2"]]
      }
    },
    "2": {
      "text": "We're halfway through the game.",
      "choices": {
        "left": [3, ["jellycat3"]],
        "right": [3, ["jellycat3, jellycat4"]]
      }
    },
    "3": {
      "text": "Game is about to be over!",
      "choices": {
        "idk what": [0, ["jellycat4"]],
        "okay fine": [0, ["jellycat1, jellycat4"]]
      }
    },
    "0": {
        "text": "",
        "choices": {}
    }
  };

  export default gameData;