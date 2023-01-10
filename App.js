import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreens from './screens/CategoriesScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverview from './screens/MealsOverview'
import MealDetailScreen from './screens/MealDetailScreen';

const Stack=createNativeStackNavigator();


export default function App() {
  return (<>
     <StatusBar style='dark' />
     <NavigationContainer>
      <Stack.Navigator screenOptions={{
         headerStyle:{backgroundColor:'#351401'},
         headerTintColor:'white',
         contentStyle:{backgroundColor:'#3f2f25'}
      }}>
        <Stack.Screen 
        name="MealsCategories" 
        component={CategoriesScreens} 
       options={{
        title:"All categories"
       }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverview} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
