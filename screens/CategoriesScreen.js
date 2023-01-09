import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native'
import CategoryGridTitle from '../components/CategoryGirdTitle'
  
function CategoriesScreens({navigation}) {
function renderCategorieyIteam(itemData){
    function pressHandler(){
        navigation.navigate('MealsOverview')
    }
    return (<CategoryGridTitle 
    title={itemData.item.title} 
    color={itemData.item.color} 
    onPress={pressHandler}/>
    )
   }



    return (<FlatList 
    data={CATEGORIES}
     keyExtractor={(iteam) => iteam.id} 
     renderItem={renderCategorieyIteam} 
     numColumns={2}/>
     )
}
export default CategoriesScreens