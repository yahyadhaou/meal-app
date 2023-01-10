import { Image, ScrollView, StyleSheet, Text, View } from "react-native"
import List from "../components/List"
import MealDetails from "../components/MealDetails"
import Subtitle from "../components/Subtitle"
import { MEALS } from "../data/dummy-data"

function MealDetailScreen({route}) {
    const mealID= route.params.mealID  
    const selectMeal=MEALS.find((meal)=>meal.id===mealID)
    return(
        <ScrollView>
        <View>
            <Image style={styles.iamge} source={{uri:selectMeal.imageUrl}} />
            <Text style={styles.title}>{selectMeal.title}</Text>
            <View>
                <MealDetails
                 duration={selectMeal.duration} 
                 complexity={selectMeal.complexity} 
                 affordability={selectMeal.affordability} 
                 textStyle={styles.detailstext}/>
            </View>
            <View>
           <Subtitle>Ingredients</Subtitle>
               <List data={selectMeal.ingredients} />
                <Subtitle>Steps</Subtitle>
               <List data={selectMeal.steps}/>
               </View>
        </View>
        </ScrollView>
    )
}
export default MealDetailScreen
const styles=StyleSheet.create({
iamge:{
width:'100%',
height:350,

},
title:{
    fontWeight:'bold',
    fontSize:24,
    margin:8,
    textAlign:'center',
    color:'white',


},
detailstext:{
color:'whie'
},
listContainer:{
maxWidth:'80%',
height:350,
},

})