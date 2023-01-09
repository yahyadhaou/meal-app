import { View, FlatList, StyleSheet} from "react-native"
import MealIteam from "../components/MealItem"

import { MEALS } from "../data/dummy-data"


function MealsOverview({route}) {
   const catId= route.params.categoryId
const displayedMeals=MEALS.filter((mealIteam)=>{
return mealIteam.categoryIds.indexOf(catId) >=0
})

function renderMealIteam(iteamData){
    
return <MealIteam title={iteamData.item.title} 
imageUrl={iteamData.item.imageUrl} 
duration={iteamData.item.duration} 
complexity={iteamData.item.complexity}
affordability={iteamData.item.affordability} />
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

    }
})