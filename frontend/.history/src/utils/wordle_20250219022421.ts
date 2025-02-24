export function paintWordle(guess: string, secretWord: string) {
  guess = guess.toLowerCase()
  secretWord = secretWord.toLowerCase()

  if (guess.length !== secretWord.length) {
    throw new Error('Words must be of the same length')
  }

  const result = Array(guess.length).fill('absent')
  const secretWordArray = secretWord.split('') as Array<string | null>

  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secretWord[i]) {
      result[i] = 'placed'
      secretWordArray[i] = null
    }
  }

  for (let i = 0; i < guess.length; i++) {
    if (result[i] !== 'correct') {
      const index = secretWordArray.indexOf(guess[i])
      if (index !== -1) {
        result[i] = 'present'
        secretWordArray[index] = null
      }
    }
  }

  return result
}
