import { StyleSheet, View,Text } from "react-native"

function MealDetails({duration,complexity,affordability,style,textStyle}) {
    return (
        <View style={[styles.details,style]}>
        <Text style={[styles.detailsIteam,textStyle]}>{duration}</Text>
        <Text style={[styles.detailsIteam,textStyle]}>{complexity.toUpperCase()}</Text>
        <Text style={[styles.detailsIteam,textStyle]}>{affordability.toUpperCase()}</Text>
    </View>    )
}
export default MealDetails
const styles=StyleSheet.create({
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
})