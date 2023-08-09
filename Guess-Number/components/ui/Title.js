import {Text,StyleSheet} from 'react-native'
function Title({children}){
    return (<Text style={styles.title}>{children}</Text>)
}
const styles=StyleSheet.create({
    title:{
        fontSize:24,
        fontWeight:'bold',
        color:"white",
        textAlign:'center',
        borderWidth:3,
        borderColor:"white",
        padding:12
      }
})
export default Title;