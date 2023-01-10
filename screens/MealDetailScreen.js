import { Image, StyleSheet, Text, View } from "react-native"
import MealDetails from "../components/MealDetails"
import { MEALS } from "../data/dummy-data"

function MealDetailScreen({route}) {
    const mealID= route.params.mealID  
    const selectMeal=MEALS.find((meal)=>meal.id===mealID)
    return(
        <View>
            <Image source={{uri:selectMeal.imageUrl}} />
            <Text>{selectMeal.title}</Text>
            <View>
                <MealDetails duration={selectMeal.duration} complexity={selectMeal.complexity} affordability={selectMeal.affordability} />
            </View>
                <Text>ingredients</Text>
                {selectMeal.ingredients.map((ingredients) =>
                (<Text  key={ingredients}>{ingredients}</Text>))}
                <Text>steps</Text>
                {selectMeal.steps.map((steps) =>
                (<Text  key={steps}>{steps}</Text>))}
        </View>
    )
}
export default MealDetailScreen
const styles=StyleSheet.create({

})