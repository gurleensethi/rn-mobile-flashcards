import React from "react";
import { connect } from "react-redux";
import { StyleSheet, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import PrimaryButton from "./PrimaryButton";
import { addCard } from "../actions/decks";

class AddCard extends React.Component {
  state = {
    question: "",
    answer: ""
  };

  handleTextChange = (name, text) => {
    this.setState(() => {
      return { [name]: text };
    });
  };

  handleAddCard = () => {
    const { question, answer } = this.state;
    const { addNewCard, navigation } = this.props;
    addNewCard({ question, answer });
    navigation.pop();
  };

  render() {
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Add New Card to '{deck.name}'</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Question"
          value={this.state.question}
          onChangeText={text => this.handleTextChange("question", text)}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter Answer"
          value={this.state.answer}
          onChangeText={text => this.handleTextChange("answer", text)}
        />
        <PrimaryButton
          text="Add"
          style={{
            margin: 0,
            marginTop: 32,
            padding: 8,
            backgroundColor: "green"
          }}
          disabled={!this.state.question || !this.state.answer}
          onPress={this.handleAddCard}
        />
      </View>
    );
  }
}

function mapStateToProps(state, { route }) {
  return {
    deck: state.decks[route.params.id]
  };
}

function mapDispatchToProps(dispatch, { route }) {
  const { id: deckId } = route.params;
  return {
    addNewCard: card => dispatch(addCard(deckId, card))
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24
  },
  title: {
    fontSize: 20
  },
  textInput: {
    borderColor: "lightgrey",
    borderWidth: 1,
    marginTop: 16,
    fontSize: 24,
    padding: 16,
    borderRadius: 6
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
