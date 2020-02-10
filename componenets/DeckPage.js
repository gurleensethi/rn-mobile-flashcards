import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PrimaryButton from "./PrimaryButton";

class DeckPage extends React.Component {
  openAddCardPage = () => {
    const { navigation, deck } = this.props;
    navigation.push("Add Card", deck);
  };

  openTakeQuizPage = () => {
    const { navigation, deck } = this.props;
    navigation.push("Take Quiz", deck);
  };

  render() {
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{deck.name}</Text>
        <Text style={styles.subTitle}>
          {deck.cards.length} card{deck.cards.length !== 1 && "s"}
        </Text>
        <PrimaryButton
          text="Take Quiz"
          style={{
            margin: 0,
            marginTop: 20,
            backgroundColor: "purple",
            padding: 8
          }}
          onPress={this.openTakeQuizPage}
        />
        <PrimaryButton
          text="Add Card"
          style={{
            margin: 0,
            marginTop: 20,
            backgroundColor: "blue",
            padding: 8
          }}
          onPress={this.openAddCardPage}
        />
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    deck: state.decks[props.route.params.id]
  };
}

export default connect(mapStateToProps)(DeckPage);

const styles = StyleSheet.create({
  container: {
    padding: 24
  },
  title: {
    fontSize: 28,
    fontWeight: "bold"
  },
  subTitle: {
    fontSize: 16
  }
});
