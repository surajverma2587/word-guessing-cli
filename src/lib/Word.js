class Word {
  constructor(word) {
    this.word = word;
    this.maskedWord = this.maskWord();
  }

  maskWord() {
    return [...this.word]
      .map((letter) => (letter === " " ? " " : "_"))
      .join("");
  }

  verifyCharacter(character) {
    // "Foo Bar 2"
    // o
    const wordArray = [...this.word];
    const maskedWordArray = [...this.maskedWord];
    const indexes = wordArray.reduce(
      (acc, each, index) => (each === character ? [...acc, index] : acc),
      []
    );

    console.log(indexes);

    indexes.forEach((index) => {
      maskedWordArray[index] = character;
    });

    this.maskedWord = maskedWordArray.join("");
  }

  displayWord() {
    console.log(this.maskedWord);
  }
}

module.exports = Word;
