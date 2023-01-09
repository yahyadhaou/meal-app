import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreens from './screens/CategoriesScreen';

export default function App() {
  return (<>
     <StatusBar style='light' />
     <NavigationContainer>
    <CategoriesScreens />
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  }
});
