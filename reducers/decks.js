import { ADD_DECK } from "../actions/decks";

export default function decks(state = [], action) {
  switch (action.type) {
    case ADD_DECK: {
      return [
        ...state,
        {
          name: action.name,
          id: Date.now(),
          cards: []
        }
      ];
    }
    default:
      return state;
  }
}
