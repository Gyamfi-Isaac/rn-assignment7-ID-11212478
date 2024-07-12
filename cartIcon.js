import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CartIcon = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      style={styles.ShoppingBag}
    >
      <Image source={require('./assets/shoppingBag.png')} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  ShoppingBag: {
    position: 'absolute',
    bottom: 910,
    left: 400,
  },
});

export default CartIcon;