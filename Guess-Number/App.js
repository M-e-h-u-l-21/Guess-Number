import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from 'expo-app-loading'

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds,setGuessRounds] = useState(0)

  const [fontsLoaded]=useFonts({
    'open-sans':require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold':require('./assets/fonts/OpenSans-Bold.ttf')
  })

  if(!fontsLoaded){
    return <AppLoading/>
  }
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler() {
    setGameIsOver(true);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPick={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen chosenNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }

  if (gameIsOver && userNumber) {
    screen = <GameOverScreen userNumber={userNumber} roundNumber={} onStartNewGame={}/>;
  }

  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootLayout}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.rootLayout}
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootLayout}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootLayout: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
