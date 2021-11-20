const inquirer = require("inquirer");
const Game = require("./lib/Game");

// define questions

const start = async () => {
  const { playerName } = await inquirer.prompt([
    {
      type: "input",
      name: "playerName",
      message: "Enter your name:",
      default: "Player 1",
    },
  ]);

  // create game
  const game = new Game(playerName);

  // start game
  game.startGame();

  while (game.inProgress) {
    // display masked word
    game.word.displayWord();

    await game.getUserInput();

    // display masked word
    game.word.displayWord();
  }
};

start();
