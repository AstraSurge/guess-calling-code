import * as timezoneCityToCallingCodeObj from "./metadata/timezoneCityToCallingCodeObject.json";

function getUserTimeZoneCity() {
  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (!userTimezone) return;
  const timezoneArr = userTimezone.split("/");
  const result = timezoneArr[timezoneArr.length - 1];
  return result;
}

function guessCallingCode() {
  const timezoneCity = getUserTimeZoneCity();
  if (!timezoneCity) return;
  const callingCode = timezoneCityToCallingCodeObj[timezoneCity];
  return callingCode;
}

export default guessCallingCode;
