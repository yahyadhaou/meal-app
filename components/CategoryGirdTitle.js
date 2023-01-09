import { Pressable, View, Text, StyleSheet,Platform} from "react-native"

function CategoryGridTitle({title,color,onPress}) {
    return (
        <View style={styles.gridIteam}>
            <Pressable 
            android_ripple={{color:'#cccc'}}
             style={({pressed})=>[styles.button,pressed ? styles.buttonPressed:null]}
             onPress={onPress}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}
export default CategoryGridTitle
const styles=StyleSheet.create({
    gridIteam:{
flex:1,
margin:16,
height:150,
borderRadius:8,
elevation:4,
shadowColor:'black',
shadowOffset:{width:0,height:2},
shadowRadius:8,
backgroundColor:'#F2F2F2',
overflow: Platform.OS==='android' ? 'hidden':'visible'

    },
    button:{
flex:1
    },
    buttonPressed:{
        opacity:0.5,
    },
    innerContainer:{
        flex:1,
        padding:16,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'

    },
    title:{
        fontWeight:'bold',
        fontSize:18,

    },
})