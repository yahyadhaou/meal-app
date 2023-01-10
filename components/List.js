import { StyleSheet, Text, View } from "react-native"

function List({data}){
return (
    
    data.map((dataPoint) =>
        (
            <View key={dataPoint} style={styles.listIteam}>
            <Text style={styles.itemText} >{dataPoint}</Text>
            </View>
            ))
        
)

}
export default List
const styles=StyleSheet.create({
listIteam:{
    borderRadiuis:6,
    paddingHorizontal:8,
    paddingVertical:4,
    marginHorizontal:12,
    marginVertical:8,
    backgroundColor:'#e2b497',

},
itemText:{
    color:'#351401',
    textAlign:'center',
}
})