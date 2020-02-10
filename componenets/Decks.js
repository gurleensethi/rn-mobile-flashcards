import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  Platform
} from "react-native";
import PrimaryButton from "./PrimaryButton";
import Deck from "./Deck";
import { SafeAreaView } from "react-native-safe-area-context";

class Decks extends React.Component {
  renderDeckItem = ({ item }) => {
    const deck = this.props.decks[item];
    return (
      <Deck
        deck={deck}
        openDeckPage={() => this.openDeckPage(deck)}
        key={item.id}
      />
    );
  };

  openDeckPage = deck => {
    const { navigation } = this.props;
    navigation.push("Deck Page", deck);
  };

  openAddDeckPage = () => {
    const { navigation } = this.props;
    navigation.push("Add Deck");
  };

  render() {
    const { decks } = this.props;
    return (
      <SafeAreaView style={styles.constainer}>
        <StatusBar />
        {!!Object.keys(decks).length ? (
          <FlatList
            data={Object.keys(decks)}
            renderItem={this.renderDeckItem}
            keyExtractor={item => `${item}`}
          />
        ) : (
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTxt}>No Decks :(</Text>
            <Text>Click on 'Add New Deck' to create new decks.</Text>
          </View>
        )}
        <PrimaryButton text="Add New Deck" onPress={this.openAddDeckPage} />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  };
}

export default connect(mapStateToProps)(Decks);

const styles = StyleSheet.create({
  constainer: {
    paddingTop: 20,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "stretch"
  },
  listItem: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 6,
    elevation: 6,
    backgroundColor: "cornflowerblue"
  },
  infoTextContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  infoTxt: {
    fontSize: 40,
    marginBottom: 10
  }
});
