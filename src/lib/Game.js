const inquirer = require("inquirer");

const Word = require("./Word");
const { getRandomItem } = require("../utils");
const { movies } = require("../words");

class Game {
  constructor(playerName) {
    this.playerName = playerName;
    this.remainingAttempts = 10;
    this.inProgress = false;

    const randomMovie = getRandomItem(movies);
    this.word = new Word(randomMovie);
  }

  startGame() {
    this.inProgress = true;
  }

  stopGame() {
    this.inProgress = false;
  }

  async getUserInput() {
    // ask the question and get the answer
    const { character } = await inquirer.prompt([
      {
        type: "input",
        name: "character",
        message: "Enter a letter or number:",
      },
    ]);

    console.log(character);

    this.word.verifyCharacter(character);
  }
}

module.exports = Game;
