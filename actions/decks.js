export const ADD_DECK = "ADD_DECK";

export function addDeck(name) {
  return {
    name,
    type: ADD_DECK
  };
}
