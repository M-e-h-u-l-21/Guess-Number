import { Text, View, Image, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton"
function GameOverScreen({roundNumber,userNumber,onStartNewGame}) {
     console.log("Game over .js mein"); 
  return (
    <>
      <View style={styles.mainContainer}>
        <Title>GAME OVER!!</Title>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundNumber}</Text> rounds to guess the number <Text  style={styles.highlight}>{userNumber}</Text></Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 38,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: Colors.primary500,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText:{
    fontFamily:'open-sans',
    fontSize:24,
    textAlign:'center',
    marginBottom:24
  },
  highlight:{
    fontFamily:'open-sans-bold',
    color:Colors.primary500
  }
});
