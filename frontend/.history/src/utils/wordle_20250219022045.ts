function paintWordle(guess, secretWord) {
  // Переводим оба слова в нижний регистр для сравнения
  guess = guess.toLowerCase()
  secretWord = secretWord.toLowerCase()

  // Если слова не равны по длине, возвращаем ошибку
  if (guess.length !== secretWord.length) {
    throw new Error('Words must be of the same length')
  }

  const result = Array(guess.length).fill('absent') // Начальное состояние - все серые
  const secretWordArray = secretWord.split('')

  // Первый проход: отмечаем все правильно угаданные буквы на своих местах
  for (let i = 0; i < guess.length; i++) {
    if (guess[i] === secretWord[i]) {
      result[i] = 'correct'
      secretWordArray[i] = null // Убираем букву из secretWord, чтобы она не использовалась повторно
    }
  }

  // Второй проход: отмечаем буквы, которые есть в слове, но не на своем месте
  for (let i = 0; i < guess.length; i++) {
    if (result[i] !== 'correct') {
      const index = secretWordArray.indexOf(guess[i])
      if (index !== -1) {
        result[i] = 'present'
        secretWordArray[index] = null // Убираем использованную букву
      }
    }
  }

  return result
}
