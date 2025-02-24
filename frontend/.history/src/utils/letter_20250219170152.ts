export function isLetter(char: string): boolean {
  return char.length == 1 && /[a-zA-Z]/.test(char)
}
