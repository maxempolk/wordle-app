import { State } from './state'

export interface KeyboardLetter {
  letter: string
  state: State | 'empty'
}
