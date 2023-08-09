import { Text,View,Image, StyleSheet} from "react-native";
function GameOverScreen(){
    return (
    <>
    <View>
        <Title>GAME OVER!!</Title>
        <View>
        <Image source={require('../assets/success.png')}/>
        </View>
    </View>
    </>
    )
}

export default GameOverScreen;

const styles=StyleSheet.create({
    
})