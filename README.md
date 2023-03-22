# guess-calling-code

[![npm](https://img.shields.io/npm/v/guess-calling-code)](https://www.npmjs.com/package/guess-calling-code)
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAnarchStudio%2Fguess-calling-code.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FAnarchStudio%2Fguess-calling-code?ref=badge_shield)
[![Codecov](https://img.shields.io/codecov/c/github/anarchStudio/guess-calling-code?token=N4MIOTA82O)](https://codecov.io/gh/AnarchStudio/guess-calling-code)

Client-side resolution for acquiring the user's dialing code enables seamless phone number input within browsers, and this library is also compatible with Node.js!

## Install

Using npm:

```
npm install guess-calling-code
```

Using yarn:

```
yarn add guess-calling-code
```

## Usage

This library can be used in both browser and Node.js environments.

### Browser Usage

First, include the library in your HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/guess-calling-code/dist/index.umd.js"></script>
```

Then, in your JavaScript code:

```js
const guessCallingCode = window.guessCallingCode;
const callingCode = guessCallingCode(); // example output: "1" (for United States users)
```

### Node.js Usage

```sh
npm install guess-calling-code
```

or

```sh
yarn add guess-calling-code
```

Then, in your JavaScript code:

```js
const guessCallingCode = require("guess-calling-code");
const callingCode = guessCallingCode(); // example output: "1" (for United States users)
```

### TypeScript Usage

```typescript
import guessCallingCode from "guess-calling-code";
const callingCode = guessCallingCode(); // example output: "1" (for United States users)
```

## API

### `guessCallingCode(): string | undefined`

This function returns the calling code as a string based on the user's current time zone city.

## Support

If you have any questions or need help, please open an issue on the GitHub repository, and we will do our best to assist you.

## Further Reading

Curious about how it works? Check out this [blog post](https://dev.to/suikodev/javascript-trick-guessing-users-country-calling-codes-by-time-zone-2p9a).

## License

[LICENSE (MIT)](/LICENSE)
