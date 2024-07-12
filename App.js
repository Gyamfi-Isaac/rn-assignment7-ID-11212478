import React, { useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';
import { CartProvider } from './context/CartContext';
import HomeStackNavigator from './HomeStackNavigator';
import { useNavigation } from "@react-navigation/native";
import CartIcon from './cartIcon';
import LocationsScreen from './Screens/LocationsScreen';
import BlogScreen from './Screens/BlogScreen';
import ClothingScreen from './Screens/ClothingScreen';
import JewelryScreen from './Screens/JewelryScreen';
import ElectronicScreen from './Screens/ElectronicScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');


  return (
     <CartProvider>
        <NavigationContainer
        style={styles.container}
        onStateChange={(state) => {
          const currentRoute = state.routes[state.index];
          setCurrentScreen(currentRoute.name);
        }}
      >
        <Drawer.Navigator>
          <Drawer.Screen name="Store" component={HomeStackNavigator} />
          <Drawer.Screen name="Locations" component={LocationsScreen} />
          <Drawer.Screen name="Blog" component={BlogScreen} />
          <Drawer.Screen name="Jewelry" component={JewelryScreen} />
          <Drawer.Screen name="Electronic" component={ElectronicScreen} />
          <Drawer.Screen name="Clothing" component={ClothingScreen} />
        </Drawer.Navigator>
        <View
        style={[
          styles.Logo,
          currentScreen === 'Cart' ? styles.logoCartStyle : styles.Logo,
        ]}
      >
        <Image source={require('./assets/Logo.png')} />
      </View>
      <View
        style={[
          styles.Search,
          currentScreen === 'Cart' ? styles.searchCartStyle : styles.Search,
        ]}
      >
        <Image source={require('./assets/Search.png')} />
      </View>
      {currentScreen !== 'Cart' && <CartIcon />}
      </NavigationContainer>
     </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Logo: {
    position: 'absolute',
    bottom: 880,
    left: 180,
    height: 50
  },
  Search: {
    position: 'absolute',
    bottom: 905,
    left: 360,
  },
  ShoppingBag: {
    position: 'absolute',
    bottom: 910,
    left: 400,
  },
  logoCartStyle: {
    bottom: 890
  },
  searchCartStyle: {
    bottom: 900,
    left: 360,
  }
});
