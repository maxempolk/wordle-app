import { type State } from '@/types/state'

export const stateToHex = (state: State) => {
  if (state == 'placed') return '#548D4F'
  else if (state == 'in-word') return '#B69F3B'
  return '#3A3A3C'
}
