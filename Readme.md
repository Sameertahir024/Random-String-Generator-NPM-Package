# string-generate

A versatile TypeScript/JavaScript library for generating random strings with customizable options.

## Installation

Install the package using using npm :

```javascript
npm install string-generate
```

## Usage

First, import the `string-generate` function from the package:

```javascript
import { generate } from "string-generate";

Generates a random string based on the specified length and options.

console.log(generate()); // Default 32-character alphanumeric string

console.log(generate(7)); // 7-character alphanumeric string

console.log(generate({ length: 12, charset: 'alphabetic' })); // 12-character alphabetic string
// or use these charset| "alphanumeric" | "numeric" | "!@#$%^&*()" | "hex"

console.log(generate({ charset: 'abc' })); // 32-character string using only 'a', 'b', and 'c'

console.log(generate({ charset: ['numeric', '!'] })); // 32-character string using numbers and '!'

generate({ charset: 'abc' }, (result) => {
  console.log(result)}) // Callback
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have questions, please file an issue on the GitHub repository.

## Changelog

### 1.0.5

- Initial release
- Basic string generation functionality
- Customizable options for character types and exclusions

---

Made with ❤️ by [Muhammad Sameer]
