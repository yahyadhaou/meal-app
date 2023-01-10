import { StyleSheet, Text, View } from "react-native"

function MealDetailScreen({route}) {
    const mealID= route.params.mealID   
    return(
        <View>
            <Text>
                hello({mealID})
            </Text>
        </View>
    )
}
export default MealDetailScreen
const styles=StyleSheet.create({

})