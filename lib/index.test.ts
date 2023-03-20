import guessCallingCode from ".";

describe("guessCallingCode", () => {
  it("should return 1 when timezone is America/New_York", () => {
    global.Intl = {
      DateTimeFormat: () => ({
        resolvedOptions: () => ({
          timeZone: "America/New_York",
        }),
      }),
    } as typeof Intl;
    expect(guessCallingCode()).toBe("1");
  });

  it("should return undefined if Intl is not available", () => {
    global.Intl = undefined;
    expect(guessCallingCode()).toBe(undefined);
  });
});
