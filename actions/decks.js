export const ADD_DECKS = "ADD_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";
import { saveDeck, saveCard } from "../utils/api";

export function addDeck(deck) {
  return {
    deck,
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

export function addDecks(decks) {
  return {
    decks,
    type: ADD_DECKS
  };
}

export function handleAddDeck(name, cb) {
  return dispatch => {
    const deck = {
      name,
      id: Date.now(),
      cards: []
    };
    saveDeck(deck).then(() => {
      dispatch(addDeck(deck));
      cb(deck);
    });
  };
}

export function handleAddCard(deckId, card) {
  return dispatch => {
    const cardToSave = {
      ...card,
      id: Date.now()
    };
    saveCard(deckId, card).then(() => dispatch(addCard(deckId, cardToSave)));
  };
}
