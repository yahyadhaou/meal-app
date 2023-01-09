import { Image, Pressable, StyleSheet, Text, View } from "react-native"

function MealIteam({ title, imageUrl,affordability,complexity,duration}) {
    return (
        <View>
            <Pressable>
           <View>
            <Image style={styles.image} source={{uri:imageUrl}}/>
            <Text style={styles.title}>{title}</Text>
            </View>
            <View>
                <Text>{duration}</Text>
                <Text>{complexity}</Text>
                <Text>{affordability}</Text>
                </View>    
            </Pressable>
            
        </View>
    )
}
export default MealIteam

const styles = StyleSheet.create({
    image:{
height:200,
width:"100%"
    },
    title:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:18,
    },

})