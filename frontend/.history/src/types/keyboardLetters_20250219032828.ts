import { State } from "./state"

interface KeyboardLetter{
  letter: State | 'empty'
}

export type keyboardLetters = object<string, State>
