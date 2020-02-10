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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={createStore(reducers)}>
        <View style={styles.container}>
          <Stack.Navigator>
            <Stack.Screen
              name="Decks"
              component={Decks}
              options={{ title: "Decks" }}
            />
            <Stack.Screen name="Add Deck" component={AddDeck} />
            <Stack.Screen
              name="Deck Page"
              component={DeckPage}
              options={({ route }) => {
                return { title: route.params.name };
              }}
            />
            <Stack.Screen
              name="Add Card"
              component={AddCard}
              options={({ route }) => {
                return { title: route.params.name };
              }}
            />
          </Stack.Navigator>
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center"
  }
});
