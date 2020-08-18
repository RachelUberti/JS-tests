const subtraction = require("../src/myScript.js");

//expect 5-3 = 2
// expect(subtract(5-3)).toEqual(2);

//expect 0.8-0.4 = 0.4
// expect(subtract(0.8, 0.4)).toBe(0.4);

//expect 3 - string = error
// expect(subtract(3 - "string")).toThrow();

describe("subtraction", function () {
  it("returns the subtraction of two numbers", function () {
    // expect(subtract(5-3)).toEqual(2);
    let subtract = subtraction(5, 3);
    expect(subtract).toEqual(2);
  });
  describe("when I pass a string parameter to subtraction function", function () {
    it("Should throw an error", function () {
      //expect 3 - string = error
      // expect(subtract(3 - "string")).toThrow();
      let x = "string";
      let y = "string";
      let result = subtraction(x, y);
      expect(result).toBe("Invalid");
    });
  });
  describe("subtraction", function () {
    it("returns the subtraction of two decimal numbers", function () {
      // expect(subtract(0.8-0.4)).toEqual(0.4);
      let subtract = subtraction(0.8, 0.4);
      expect(subtract).toEqual(0.4);
    });
  });
});
