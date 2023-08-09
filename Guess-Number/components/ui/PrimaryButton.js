import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children , onPress}) {
  return (
  <View style={styles.buttonOuterContainer}>
    <Pressable style={styles.buttonInnerContainer} onPress={onPress} android_ripple={{ color: "#d7046e" }}>
        <Text style={styles.buttonText}>{children}</Text>  
    </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonOuterContainer:{
      // width:'40%',
        borderRadius: 28,
        marginTop:24,
        margin: 8,
        overflow:'hidden'
    },
  buttonInnerContainer: {
    backgroundColor: "#aa0959",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize:18
  },
});

export default PrimaryButton;
