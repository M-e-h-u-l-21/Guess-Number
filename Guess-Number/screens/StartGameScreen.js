import { TextInput, StyleSheet, View, Pressable, Alert,Text } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

function StartGameScreen({onPick}) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInput() {
    setEnteredNumber("");
  }
  function confirmInput() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!!", "Number must be betwen 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInput },
      ]);
      return;
    }
    onPick(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title > Guess My Number</Title>
    <Card >
      <InstructionText >Enter a number</InstructionText>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        value={enteredNumber}
        onChangeText={numHandler}
      />
      <View style={styles.buttonLayout}>
        <View style={styles.buttonLay}>
          <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonLay}>
          <PrimaryButton onPress={confirmInput}>Confirm</PrimaryButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer:{
    flex:1,
    marginTop:80,
    alignItems:'center'
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    width: 50,
    textAlign: "center",
  },
  buttonLayout: {
    flexDirection: "row",
  },
  buttonLay: {
    flex: 1,
    flexDirection: "column",
  },
  
});
export default StartGameScreen;
