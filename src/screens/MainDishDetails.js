import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, FlatList, Pressable} from 'react-native'
import Checkbox from 'expo-checkbox';
import CircularButton from '../components/CircularButton'
import { useNavigation } from '@react-navigation/native';

import {MaterialIcons} from '@expo/vector-icons';
import CheckboxComp from '../components/CheckboxComp';

const MainDishDetails = () => {

    const navigation = useNavigation();

    const Dressing = ['Caramal', 'Chocolate', 'Custard', 'Blueberry Jam', 'Strawberry Jam', 'Sprinkles', 'Cream Cheese', 'Whipped Cream']

    const addToCart = () => { 
        navigation.navigate("Cart", {dishItem: 'Pizza'})
    }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
            source={require('../../assets/maindish.png')}
            style={{ width: "100%", height: 310, }}
            // resizeMode="cover"
        />

        <View style={styles.restaurantName}>
          <Text style={{fontSize: 22, fontWeight: 'bold', lineHeight: 50}}>Mayfield Bakery & Cafe</Text>
          <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 20}}>Shortbread, chocolate turtle cookies, and red velvet. 8 ounces cream cheese, softened.</Text>
          <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 40}}>$$ &#8226; Chinese &#8226; American &#8226; Deshi food</Text>
  
        </View>

      </View>
      <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{padding: 15, fontSize: 20, fontWeight: '500'}}>Choice of top Dressing</Text>
        <View style={{marginRight: 20, height: 40, width: 80, justifyContent: 'center', alignItems: 'center', borderRadius: 8, backgroundColor: '#FEEED2'}}>
            <Text style={{fontWeight: '500', color: '#FBB746'}}>REQUIRED</Text></View>
      </View>

      <View style={styles.ListItemsContainer}>
        <FlatList 
            data = {Dressing}
            renderItem = {({item})=> <CheckboxComp dressing={item} />}
            showsVerticalScrollIndicator = {false}
        />
      </View>
      <View style={styles.instructions}>
        <Text style={{fontSize: 17, color: '#6F6F6F'}}>Add Special Instructions</Text>
        <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
      </View>
      <View>
        <CircularButton />
      </View>
      <Pressable style={styles.button} onPress={addToCart}>
            <Text style={{color: '#419D47', fontWeight: 'bold'}}>ADD TO CART</Text>
      </Pressable>
      
    </ScrollView>
  )
}

export default MainDishDetails

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    // height: 600,
    paddingBottom: 40,
    width: '100%',
    // borderWidth: 1,
    // marginTop: 45
  },

  DeliverTo: {
    display: 'flex',
    width: '100%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: 5,

    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 2,
      },
    shadowOpacity: 0.25,
    shadowRadius: 4.84,

    elevation: 5,
  },

  restaurantName: {
    // borderWidth: 5,
    height: 130,
    padding: 15,
  },

  foodOptions: {
    // borderWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  deliver: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  deliver2: {
    fontSize: 14, 
    fontWeight: 'normal', 
    color: '#343F49',
    opacity: 0.5
  },

  TopRestaurantsView:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    // borderWidth: 2
  },
  ListItemsContainer: {
    // marginTop: 15,
    // borderWidth: 1,
    width: '100%',
    // height: '49%',
    padding: 10
    },

    instructions: {
        width: '95%',
        margin: 15,
        borderBottomWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        borderBottomColor: '#E8E8E8',
    },
    button: {
        // backgroundColor: '#419D47',
        borderWidth: 1,
        borderColor: '#419D47',
        width: 300,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginLeft: 50
      },

});