import { View, FlatList, StyleSheet} from "react-native"
import MealIteam from "../components/MealItem"
import { useLayoutEffect } from "react"
import { MEALS,CATEGORIES} from "../data/dummy-data"


function MealsOverview({route,navigation}) {
   const catId= route.params.categoryId

const displayedMeals=MEALS.filter((mealIteam)=>{
return mealIteam.categoryIds.indexOf(catId) >=0
})

useLayoutEffect(()=>{
    const categoryTitle=CATEGORIES.find((category)=>category.id=== catId).title
    
    navigation.setOptions({
        title:categoryTitle,
    });

},[catId,navigation])

function renderMealIteam(itemData){
    const item=itemData.item
    const mealIteamProps={
        title:item.title,
        imageUrl:item.imageUrl,
        duration:item.duration,
        complexity:item.complexity,
        affordability:item.affordability,
    }
return <MealIteam {...mealIteamProps} />
}
return (
        <View style={styles.container}>
          <FlatList 
          data={displayedMeals}  
          keyExtractor={(item)=> item.id} 
          renderItem={renderMealIteam} />  
        </View>
    )
}
export default MealsOverview
const styles=StyleSheet.create({
    container:{
        flex:1,
        padding:16,

    },
})