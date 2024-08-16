const gameData = {
    "1": {
      "text": "It's the beginning of the game. What are you going to choose?",
      "image": "/smaller_images/1.png",
      "choices": {
        "ok i'll stay here": [2, ["jellycat1", "jellycat2"]],
        "no": [2, ["jellycat3", "jellycat2"]]
      }
    },
    "2": {
      "text": "We're halfway through the game. A few more choices to make!",
      "image": "/smaller_images/2.png",
      "choices": {
        "left": [3, ["jellycat3", "jellycat1"]],
        "right": [3, ["jellycat3", "jellycat4", "jellycat"]]
      }
    },
    "3": {
      "text": "Game is about to be over! Oh no! So sad.",
      "image": "/smaller_images/3.png",
      "choices": {
        "idk what": [0, ["jellycat4", "jellycat2"]],
        "okay fine": [0, ["jellycat3", "jellycat4"]]
      }
    },
    "0": {
        "text": "",
        "images": "",
        "choices": {}
    }
  };

  export default gameData;