import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import PrimaryButton from "./PrimaryButton";

class TakeQuiz extends React.Component {
  state = {
    cardCounter: 0,
    isShowingAnswer: false,
    correctCount: 0,
    incorrectCount: 0,
    showStats: false
  };

  handleDisplayAnswer = () => {
    this.setState(() => {
      return { isShowingAnswer: true };
    });
  };

  handleAnswer = isCorrect => {
    const { deck } = this.props;
    this.setState(state => {
      let { cardCounter, correctCount, incorrectCount, showStats } = state;

      if (isCorrect) {
        correctCount++;
      } else {
        incorrectCount++;
      }

      if (cardCounter === deck.cards.length - 1) {
        showStats = true;
      } else {
        cardCounter++;
      }

      return {
        isShowingAnswer: false,
        correctCount,
        incorrectCount,
        cardCounter,
        showStats
      };
    });
  };

  handleRestartQuiz = () => {
    this.setState(() => {
      return {
        cardCounter: 0,
        isShowingAnswer: false,
        correctCount: 0,
        incorrectCount: 0,
        showStats: false
      };
    });
  };

  handleGoToDeck = () => {
    const { navigation } = this.props;
    navigation.pop();
  };

  renderQuestionCard = () => {
    const { deck } = this.props;
    const question = deck.cards[this.state.cardCounter];
    return (
      <View style={styles.contentCard}>
        <Text style={styles.questionLabel}>Question</Text>
        <Text style={styles.questionTxt}>{question.question}</Text>
        {this.state.isShowingAnswer && (
          <View>
            <Text style={[styles.questionLabel, { marginTop: 16 }]}>
              Answer
            </Text>
            <Text style={styles.questionTxt}>{question.answer}</Text>
          </View>
        )}
        {this.state.isShowingAnswer ? (
          <View style={{ marginTop: 32, alignItems: "center" }}>
            <Text style={{ fontSize: 24 }}>Was your answer?</Text>
            <View style={styles.answerBtnContainer}>
              <PrimaryButton
                text="Correct"
                style={{
                  padding: 10,
                  backgroundColor: "green"
                }}
                onPress={() => this.handleAnswer(true)}
              />
              <PrimaryButton
                text="Incorrect"
                style={{ padding: 10, backgroundColor: "red" }}
                onPress={() => this.handleAnswer(false)}
              />
            </View>
          </View>
        ) : (
          <PrimaryButton
            text="Show Answer"
            style={{ padding: 6, backgroundColor: "orange", marginTop: 64 }}
            onPress={this.handleDisplayAnswer}
          />
        )}
      </View>
    );
  };

  renderStats = () => {
    const { deck } = this.props;
    return (
      <View style={[styles.contentCard, { alignItems: "center" }]}>
        <Text style={{ fontSize: 24, marginBottom: 16 }}>Your Performance</Text>
        <Text style={styles.statsTxt}>
          Correct: {this.state.correctCount} (
          {((this.state.correctCount / deck.cards.length) * 100).toFixed(2)}%)
        </Text>
        <Text style={styles.statsTxt}>
          Incorrect: {this.state.incorrectCount} (
          {((this.state.incorrectCount / deck.cards.length) * 100).toFixed(2)}%)
        </Text>
        <View style={{ marginTop: 32, alignItems: "center" }}>
          <View style={styles.answerBtnContainer}>
            <PrimaryButton
              text="Restart Quiz"
              style={{
                padding: 10,
                backgroundColor: "purple"
              }}
              onPress={this.handleRestartQuiz}
            />
            <PrimaryButton
              text="Go to Deck"
              style={{ padding: 10, backgroundColor: "orange" }}
              onPress={this.handleGoToDeck}
            />
          </View>
        </View>
      </View>
    );
  };

  render() {
    const { deck } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.counterContainer}>
          <View style={styles.counter}>
            <Text style={styles.counterText}>
              Question {this.state.cardCounter + 1}/{deck.cards.length}
            </Text>
          </View>
        </View>
        {this.state.showStats ? this.renderStats() : this.renderQuestionCard()}
      </View>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    deck: state.decks[props.route.params.id]
  };
}

export default connect(mapStateToProps)(TakeQuiz);

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1
  },
  counterContainer: {
    alignItems: "center"
  },
  counter: {
    backgroundColor: "blue",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    elevation: 6,
    marginBottom: 24
  },
  counterText: {
    color: "white",
    fontSize: 24
  },
  contentCard: {
    elevation: 6,
    padding: 24,
    backgroundColor: "white",
    borderRadius: 6
  },
  questionLabel: {
    fontSize: 16,
    color: "grey"
  },
  questionTxt: {
    fontSize: 28
  },
  answerBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  statsTxt: {
    fontSize: 24
  }
});
