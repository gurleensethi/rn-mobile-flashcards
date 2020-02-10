import React from "react";
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore } from "redux";
import Decks from "./componenets/Decks";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import AddDeck from "./componenets/AddDeck";
import DeckPage from "./componenets/DeckPage";
import AddCard from "./componenets/AddCard";
import TakeQuiz from "./componenets/TakeQuiz";
import middleware from "./middleware";
import { handleInitialData } from "./actions/shared";
import { setNotification } from "./utils/notification";

const store = createStore(reducers, middleware);
const Stack = createStackNavigator();

export default class App extends React.Component {
  componentDidMount() {
    setNotification();
    store.dispatch(handleInitialData());
  }

  render() {
    return (
      <NavigationContainer>
        <Provider store={store}>
          <View style={styles.container}>
            <Stack.Navigator>
              <Stack.Screen
                name="Decks"
                component={Decks}
                options={{ title: "Decks " }}
              />
              <Stack.Screen name="Add Deck" component={AddDeck} />
              <Stack.Screen
                name="Deck Page"
                component={DeckPage}
                options={({ route }) => {
                  return { title: `${route.params.name}    ` };
                }}
              />
              <Stack.Screen
                name="Add Card"
                component={AddCard}
                options={({ route }) => {
                  return { title: "Add Card   " };
                }}
              />
              <Stack.Screen
                name="Take Quiz"
                component={TakeQuiz}
                options={{
                  title: "Take Quiz "
                }}
              />
            </Stack.Navigator>
          </View>
        </Provider>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
