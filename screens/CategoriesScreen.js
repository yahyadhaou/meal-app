import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native'
import CategoryGridTitle from '../components/CategoryGirdTitle'
   function renderCategorieyIteam(itemData){
    return <CategoryGridTitle title={itemData.item.title} color={itemData.item.color}/>
   }


function CategoriesScreens() {
    return <FlatList 
    data={CATEGORIES}
     keyExtractor={(iteam) => iteam.id} 
     renderItem={renderCategorieyIteam } 
     numColumns={2}/>
}
export default CategoriesScreens