import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, FlatList, Pressable} from 'react-native'
import Checkbox from 'expo-checkbox';
import CircularButton from '../components/CircularButton'
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Dish } from '../models';
import { DataStore } from 'aws-amplify'
import { useStateValue } from '../components/BasketContex/StateProvider';

import {MaterialIcons, AntDesign, Entypo} from '@expo/vector-icons';
import CheckboxComp from '../components/CheckboxComp';
// import { useBasketContext } from '../contexts/BasketContex';

const MainDishDetails = () => {

    const index = useNavigationState(state => state.index);

    const navigation = useNavigation();
    const [{basket}, dispatch] = useStateValue()
    // const { addDishToBasket} = useBasketContext()

    const route = useRoute()
    const id = route.params?.id
    // const restaurantId = route.params?.resId
  
    // console.warn("res id", restaurantId)

    const [dish, setDish] = useState()
    const [itemNum, setItemNum] = useState(1)

    const Dressing = ['Caramal', 'Chocolate', 'Custard', 'Blueberry Jam', 'Strawberry Jam', 'Sprinkles', 'Cream Cheese', 'Whipped Cream']

    // Quantity logic
    const addItem = () => {
      setItemNum(itemNum + 1)
      
    }
  
    const subItem = () => {
        if(itemNum >= 2){
        setItemNum(itemNum - 1)
        }
    }
    
    const getTotal = () => { 
      return(
        (itemNum*dish?.price).toFixed(1)
      )
     }

    // Fetching A single dish
    const fetchADish = async () =>{
      try {
        const results = await DataStore.query(Dish, id)
        setDish(results)
      } catch (error) {
        console.log(error)
      }
      
    }

    // const addToCart = () => { 
    //     // navigation.navigate("Cart", {dishItem: 'Pizza'})
    // }

    const addToCart = async () => { 
      // add item to basket
      dispatch({
          type: 'ADD_TO_BASKET',
          item: {
              id: dish?.id,
              name: dish?.name,
              description: dish?.description,
              price: dish?.price,
              quantity: itemNum,
              image: dish?.image,
              restaurantID: dish?.restaurantID
        }
      })

      navigation.goBack()      
   };

    useEffect(() => {
      if(id){
        fetchADish()
      }
      console.log("The navigation state: ", index);
    }, [id])
    

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Image
            source={{uri: dish?.image}}
            style={{ width: "100%", height: 310, }}
            // resizeMode="cover"
        />

        <View style={styles.restaurantName}>
          <Text style={{fontSize: 22, fontWeight: 'bold', lineHeight: 50}}>{dish?.name}</Text>
          <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 20}}>{dish?.description}.</Text>
          <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 40}}>GH¢{dish?.price} &#8226; Chinese &#8226; American &#8226; Deshi food</Text>
  
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
        {/* <CircularButton /> */}
        <View style={{marginTop: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} className='item-counter'>
            <View style={styles.counter}><AntDesign onPress={()=>{subItem()}} name="minus" size={24} color="black" /></View>
                <Text style={{fontSize: 20}}>{itemNum}</Text>
            <View style={styles.counter}><Entypo onPress={()=>{addItem()}} name="plus" size={24} color="black" /></View>
        </View>
      </View>
      <Pressable style={styles.button} onPress={addToCart}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>ADD TO CART (¢{getTotal()})</Text>
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
        // borderWidth: 1,
        backgroundColor: '#419D47',
        width: 300,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginLeft: 50
      },
      counter: {
        //   flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        //   borderWidth: 1,
        //   padding: 20,
          margin: 20,
          height: 50,
          width: 50,
          borderRadius: 30,
          backgroundColor: '#F8F8F8'
        },

});