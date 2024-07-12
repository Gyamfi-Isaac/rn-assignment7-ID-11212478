import React, { useState, useEffect, useContext} from 'react';
import { StyleSheet, Text, View, FlatList, Image,TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/CartContext';
import { useRoute } from '@react-navigation/native';


const ProductDetailScreen = () => {
  const route = useRoute();
  const { item } = route.params;
  const isRemoteImage = typeof item.image === 'string';

  return (
    <View contentContainerStyle={styles.container}>
       <Image
        source={isRemoteImage ? { uri: item.image } : item.image}
        style={styles.image}
      />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.detailDescription}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <Text style={styles.sectionTitle}>MATERIALS</Text>
      <Text style={styles.materials}>We work with monitoring programmes to
      ensure compliance with safety, health and
      quality standards for our products.</Text>
      <Text style={styles.materials}><Image source={require('../assets/Do Not Bleach.png')} />Do not bleach</Text>
      <Text style={styles.materials}><Image source={require('../assets/Do Not Tumble Dry.png')} />Do not tumble dry</Text>
      <Text style={styles.materials}><Image source={require('../assets/Do Not Wash.png')} />Dry clean with tetrachloroethylene</Text>
      <Text style={styles.materials}><Image source={require('../assets/Door to Door Delivery.png')} />Iron at a maximum of 110°C/230°F</Text>
      <View>
          <View style= {styles.shipContainer}>
          <Image style={styles.shippingIcon} source={require('../assets/Shipping.png')} />
          <Text style={styles.sectionTitle}>Free Flat Rate Shipping</Text>
          <Text style={styles.shipping}>Estimated to be delivered on</Text>
          <Text style={styles.shipping}>09/11/2021 - 12/11/2021</Text>
          </View>
      </View>
      <View style={styles.footer}>
        <Ionicons name="add-outline" size={30} color="white" style={styles.add} />
        <Text style={styles.footerText}>ADD TO BASKET</Text>
        <Ionicons name="heart-outline" size={30} color="white" style={styles.list} />
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      padding: 16,
      backgroundColor: '#fff',
  },
  image: {
      width: '50%',
      height: 300,
      left: 40
  },
  title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginVertical: 8,
      left: 40
  },
  description: {
      fontSize: 16,
      marginVertical: 8,
      left: 40
  },
  price: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 8,
      left: 40,
      color: 'red'
  },
  sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginVertical: 8,
      left: 40
  },
  materials: {
      fontSize: 14,
      marginVertical: 4,
      left: 40
  },
  shipping: {
      fontSize: 14,
      marginVertical: 4,
      left: 40
  },
  footer: {
    bottom: 0,
    width: '140%',
    backgroundColor: '#000',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    right:20,
  },
  footerText: {
    color: '#fff',
    fontSize: 24,
    right: 60
},
bag: {
    right: 70,
    color: '#fff'
},
shipContainer: {
  left: 40
},
shippingIcon: {
  marginBottom: -10,
  bottom: -20
},
add: {
  right: 100
}
});
export default ProductDetailScreen
