import { StyleSheet,View } from "react-native"
import Colors from "../../constants/colors"
function Card({children}){
    return <View style={styles.card}>{children}</View>
}

export default Card

const styles=StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: "#3b021f",
        elevation: 16,
        alignItems: "center",
      },
})