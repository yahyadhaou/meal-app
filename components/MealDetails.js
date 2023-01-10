import { StyleSheet, View,Text } from "react-native"

function MealDetails({duration,complexity,affordability}) {
    return (
        <View style={styles.details}>
        <Text style={styles.detailsIteam}>{duration}</Text>
        <Text style={styles.detailsIteam}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailsIteam}>{affordability.toUpperCase()}</Text>
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