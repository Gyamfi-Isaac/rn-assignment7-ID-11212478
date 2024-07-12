import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CartContext } from '../context/CartContext';

const CartScreen = () => {
    const { cartItems, removeFromCart } = useContext(CartContext);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

    const renderItem = ({ item, index }) => {
        const isRemoteImage = typeof item.image === 'string';
        return (
            <View style={styles.cartItem}>
                <Image
                    source={isRemoteImage ? { uri: item.image } : item.image}
                    style={styles.image}
                />
                <View style={styles.itemDetails}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                    <TouchableOpacity onPress={() => removeFromCart(item)}>
                        <Image source={require('../assets/remove.png')} style={styles.remove} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.checkout}>CHECKOUT</Text>
            <Image source={require('../assets/line.png')} style={styles.line} />
            <FlatList
                data={cartItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.id}-${index}`} // Ensure unique keys
            />
            <View style={styles.totalContainer}>
                <Text style={styles.total}>EST. TOTAL</Text>
                <Text style={styles.totalPrice}>${totalPrice.toFixed(2)}</Text>
            </View>
            <View style={styles.footer}>
                <Ionicons name="bag-outline" size={30} color="white" style={styles.bag} />
                <Text style={styles.footerText}>CHECKOUT</Text>
            </View>
        </View>
    );
};

export default CartScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    cartItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    itemDetails: {
        flex: 1,
        marginLeft: 20,
    },
    description: {
        fontSize: 14,
        color: '#555',
    },
    image: {
        width: 150,
        height: 240,
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: 'red',
        paddingTop: 5,
        fontWeight: 'bold',
    },
    remove: {
        marginTop: 10,
        width: 30,
        height: 30,
        left: 200
    },
    checkout: {
        fontSize: 24,
        textAlign: 'center',
        marginVertical: 10,
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 20,
    },
    total: {
        fontSize: 20,
    },
    totalPrice: {
        color: 'red',
        fontSize: 20,
    },
    footer: {
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        width: 600,
        right: 50
    },
    footerText: {
        color: '#fff',
        fontSize: 24,
        marginLeft: 10,
    },
    bag: {
        color: '#fff',
    },
    line: {
        alignSelf: 'center',
        marginVertical: 10,
    },
});