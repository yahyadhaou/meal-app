import { Image, Platform, Pressable, StyleSheet, Text, View ,Platform} from "react-native"

function MealIteam({ title, imageUrl, affordability, complexity, duration }) {
    return (
        <View style={styles.mealIteam}>
            <Pressable>
                <View>
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
        shadowRadius: 8,

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
    }
})