import { ADD_DECK, ADD_CARD } from "../actions/decks";

export default function decks(state = [], action) {
  switch (action.type) {
    case ADD_DECK: {
      const id = Date.now();
      return {
        ...state,
        [id]: {
          id,
          name: action.name,
          cards: []
        }
      };
    }
    case ADD_CARD: {
      const { deckId, card } = action;
      return {
        ...state,
        [deckId]: {
          ...state[deckId],
          cards: state[deckId].cards.concat([{ ...card, id: Date.now() }])
        }
      };
    }
    default:
      return state;
  }
}
