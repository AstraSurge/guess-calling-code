import * as timezoneCityToCallingCodeObj from "./metadata/timezoneCityToCallingCodeObject.json";

function getUserTimeZoneCity(): string | undefined {
  try {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (!userTimezone) return;
    const timezoneArr = userTimezone.split("/");
    const result = timezoneArr[timezoneArr.length - 1];
    return result;
  } catch (error) {
    return;
  }
}

function guessCallingCode(): string | undefined {
  const timezoneCity = getUserTimeZoneCity();
  if (!timezoneCity) return;
  const callingCode = timezoneCityToCallingCodeObj[timezoneCity];
  return callingCode;
}

export default guessCallingCode;
