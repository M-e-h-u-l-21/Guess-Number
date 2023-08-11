import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/Title";
import { useEffect, useState } from "react";
import {Ionicons} from '@expo/vector-icons'
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";
import NumberContainer from "../components/game/NumberContainer";
import InstructionText from "../components/ui/InstructionText";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  console.log("inside it");

  if (rndNum == exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ chosenNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(
    1,
    100,
    chosenNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  useEffect(() => {
    if (currentGuess === chosenNumber) {
      onGameOver();
    }
  }, [currentGuess, chosenNumber, onGameOver]);

  useEffect(()=>{
    
  },[])

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < chosenNumber) ||
      (direction === "upper" && currentGuess > chosenNumber)
    ) {
      Alert.alert("Don't lie!!", "You know that this is wrong....", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRndNumber);
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white"></Ionicons>
          </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "upper")}>
            <Ionicons name="md-add" size={24} color="white"></Ionicons>
          </PrimaryButton>
          </View>
        </View>
      </Card>
      <View></View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 24,
    padding: 24,
  },
  buttonsContainer:{
    flexDirection:'row'
  },
  buttonContainer:{
    flex:1,
  },
  instructionText:{
    marginBottom:8
  }
});
