import { State } from "./state"

interface KeyboardLetter{
  letter: string
  state: State | 'empty'
}

export type keyboardLetters = object<string, State>
