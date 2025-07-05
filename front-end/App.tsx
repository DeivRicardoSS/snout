
import { StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { BottomTabs } from './src/navigation/BottomTabs';


export default function App() {
  
  return (
    <>
      <StatusBar 
        barStyle="light-content"
      />

      <NavigationContainer>
          <BottomTabs/>
      </NavigationContainer>
    </>
  );
}