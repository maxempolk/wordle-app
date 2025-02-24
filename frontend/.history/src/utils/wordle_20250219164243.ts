import type { State } from '@/types/state'

export function wordleAlgh(guess: string, secretWord: string) {
  guess = guess.toLowerCase()
  secretWord = secretWord.toLowerCase()

  if (guess.length !== secretWord.length) {
    throw new Error('Words must be of the same length')
  }

  const result = Array(guess.length).fill('wrong')
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
        result[i] = 'in-word'
        secretWordArray[index] = null
      }
    }
  }

  return result as State[]
}
