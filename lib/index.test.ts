import guessCallingCode from ".";

describe("guessCallingCode", () => {
  it("should return a string", () => {
    expect(typeof guessCallingCode()).toBe("string");
  });
  it("should return undefined if Intl is not available", () => {
    global.Intl = undefined;
    expect(guessCallingCode()).toBe(undefined);
  });
});
