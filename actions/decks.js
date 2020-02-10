export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function addDeck(name) {
  return {
    name,
    type: ADD_DECK
  };
}

export function addCard(deckId, card) {
  return {
    deckId,
    card,
    type: ADD_CARD
  };
}
