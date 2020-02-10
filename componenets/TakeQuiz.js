import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class TakeQuiz extends React.Component {
  render() {
    return (
      <View>
        <Text>TakeQuiz</Text>
      </View>
    );
  }
}

function mapStateToProps(state, props) {
    return {}
}

export default connect(mapStateToProps)(TakeQuiz);
