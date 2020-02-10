import { getDecks } from "../utils/api";
import { addDecks } from "./decks";

export function handleInitialData() {
  return dispatch => {
    getDecks().then(decks => {      
      dispatch(addDecks(decks));
    });
  };
}
