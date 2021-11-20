const Word = require("./Word");

describe("Word", () => {
  describe("methods", () => {
    describe("maskWord", () => {
      test("should return a masked word for multiple words", () => {
        const expected = "___ ___ _";
        const word = new Word("Foo Bar 2");
        const actual = word.maskWord();

        expect(actual).toEqual(expected);
      });

      test("should return a masked word for a single word", () => {
        const expected = "_______";
        const word = new Word("FooBar2");
        const actual = word.maskWord();

        expect(actual).toEqual(expected);
      });
    });

    describe("displayWord", () => {
      test("should console log the masked word", () => {
        const spy = jest.spyOn(console, "log");
        const word = new Word("Foo Bar 2");
        word.displayWord();

        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith("___ ___ _");
      });
    });
  });
});
