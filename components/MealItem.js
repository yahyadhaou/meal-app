import { Image, Platform, Pressable, StyleSheet, Text, View} from "react-native"
import { useNavigation } from "@react-navigation/native"
function MealIteam({ id,title, imageUrl, affordability, complexity, duration}) {
    const navigation =useNavigation()
function selectMealItemHandler(){
    navigation.navigate('MealDetails',{
        mealID:id
    })
}


  
    return (
        <View style={styles.mealIteam}>
            <Pressable 
            android_ripple={{color:'#ccc'}}  
            style={({pressed})=>(styles.button,pressed ? styles.buttonPressed:null)}
            onPress={selectMealItemHandler}>
                <View style={styles.innerConatainer}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <View style={styles.details}>
                    <Text style={styles.detailsIteam}>{duration}</Text>
                    <Text style={styles.detailsIteam}>{complexity.toUpperCase()}</Text>
                    <Text style={styles.detailsIteam}>{affordability.toUpperCase()}</Text>
                </View>
            </Pressable>

        </View>
    )
}
export default MealIteam

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: "100%"
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
    mealIteam: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.OS ==='android '? 'hidden':'visible' ,
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 16,
        shadowOpacity:0.35,
        

    },
    innerConatainer:{
borderRadius:8,
overflow:'hidden',
    },
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailsIteam: {
        marginHorizontal: 4,
        fontSize: 13,
    },
    buttonPressed:{
        opacity:0.5,
    },
})