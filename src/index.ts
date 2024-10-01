import crypto from "crypto";

type Charset =
  | string
  | (
      | "alphabetic"
      | "alphanumeric"
      | "numeric"
      | "hex"
      | "!@#$%^&*()"
      | string
    )[];

interface GenerateOptions {
  length?: number;
  charset?: Charset;
}

function generate(
  options?: number | GenerateOptions,
  callback?: (result: string) => void
): string {
  let length = 32;
  let charset: Charset = "alphanumeric";

  if (typeof options === "number") {
    length = options;
  } else if (typeof options === "object") {
    if (options.length) length = options.length;
    if (options.charset) charset = options.charset;
  }

  const result = generateRandomString(length, charset);

  if (callback) {
    callback(result);
  }

  return result;
}

function generateRandomString(length: number, charset: Charset): string {
  const chars = getCharset(charset);
  const bytes = crypto.randomBytes(length);
  const result = new Array(length);

  for (let i = 0; i < length; i++) {
    result[i] = chars[bytes[i] % chars.length];
  }

  return result.join("");
}

function getCharset(charset: Charset): string {
  if (typeof charset === "string") {
    switch (charset) {
      case "alphabetic":
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
      case "alphanumeric":
        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      case "numeric":
        return "0123456789";
      case "hex":
        return "0123456789abcdef";
      default:
        return charset;
    }
  } else if (Array.isArray(charset)) {
    return charset.map(getCharset).join("");
  }
  throw new Error("Invalid charset");
}

console.log(generate());

export = {
  generate,
};
