import { ADD_DECK, ADD_CARD, ADD_DECKS } from "../actions/decks";

export default function decks(state = [], action) {
  switch (action.type) {
    case ADD_DECKS: {
      return action.decks;
    }
    case ADD_DECK: {
      return {
        ...state,
        [action.deck.id]: action.deck
      };
    }
    case ADD_CARD: {
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          cards: state[deckId].cards.concat([card])
        }
      };
    }
    default:
      return state;
  }
}
