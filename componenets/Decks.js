import React from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import PrimaryButton from "./PrimaryButton";

class Decks extends React.Component {
  renderDeckItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.listItem}
        key={item.index}
        activeOpacity={0.7}
      >
        <Text style={{ fontSize: 24, color: "white" }}>{item.name}</Text>
        <Text style={{ fontSize: 18, color: "white" }}>
          {item.cards.length} card{item.cards.length !== 1 && "s"}
        </Text>
      </TouchableOpacity>
    );
  };

  openAddDeckPage = () => {
    const { navigation } = this.props;
    navigation.push("Add Deck");
  };

  render() {
    const { decks } = this.props;
    return (
      <View style={styles.constainer}>
        <StatusBar />
        {!!decks.length ? (
          <FlatList data={decks} renderItem={this.renderDeckItem} />
        ) : (
          <View style={styles.infoTextContainer}>
            <Text style={styles.infoTxt}>No Decks :(</Text>
            <Text>Click on 'Add New Deck' to create new decks.</Text>
          </View>
        )}
        <PrimaryButton text="Add New Deck" onPress={this.openAddDeckPage} />
      </View>
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
