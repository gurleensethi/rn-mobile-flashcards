import { ADD_DECK } from "../actions/decks";

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
    default:
      return state;
  }
}
