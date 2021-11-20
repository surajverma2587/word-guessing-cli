const { getRandomItem } = require("./utils");

describe("utils", () => {
  describe("getRandomItem", () => {
    test("should return a random item from an array", () => {
      const spy = jest.spyOn(Math, "random");
      spy.mockReturnValue(0.5);
      const array = ["foo", "bar", "biz", "baz"];
      const expected = "biz";
      const actual = getRandomItem(array);

      expect(actual).toEqual(expected);
    });

    test('should return "" for an empty array', () => {
      const expected = "";
      const actual = getRandomItem([]);

      expect(actual).toEqual(expected);
    });
  });
});
