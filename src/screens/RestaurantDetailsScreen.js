import React, { useState, useEffect, FlatList } from 'react'
import {View, Text, StyleSheet, Image, ScrollView, ActivityIndicator, Pressable, SafeAreaView, Alert} from 'react-native'
import PopularOrders from '../components/PopularOrders';
import { useRoute } from '@react-navigation/native';
import { DataStore } from 'aws-amplify' 
import { Restaurant, Dish } from '../models';
import { getBasketTotal } from '../components/BasketContex/reducer';
import { useStateValue } from '../components/BasketContex/StateProvider';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { useOrderContext } from '../contexts/OrderContex';

import { AntDesign,
        Ionicons,
        MaterialIcons
        } from '@expo/vector-icons';
import MainDishesListItem from '../components/MainDishesListItem';
// import { useBasketContext } from '../contexts/BasketContex';

const RestaurantDetailsScreen = () => {

  const index = useNavigationState(state => state.index);

  // const {setBasketRestaurant} = useBasketContext();
  const navigation = useNavigation();

  const [restaurant, setRestaurant] = useState(null)
  const [dishes, setDishes] = useState(null)
  const [{ basket }, dispatch] = useStateValue()
  const { setRestaurantForOrder} = useOrderContext()

  const route = useRoute()
  const id = route.params?.id

  // console.warn(id)

  const fetchRestaurant = async () =>{
    const results = await DataStore.query(Restaurant, id)
    setRestaurant(results)
    setRestaurantForOrder(results)
  }

  const fetchDish = async () =>{
    const result = await DataStore.query(Dish, (dish)=> dish.restaurantID("eq", id))
    console.log("Dishes data: ",result)
    setDishes(result)
  }


  const handleClearAndLeave = () => { 
    dispatch({
      type: 'DELETE_ALL',
    })
    navigation.goBack()
   }

  const handleLeaveDetailsScreen = () => {
    if(basket.length>0){
      Alert.alert(
        "Basket Alert",
        "You will lose the content of the basket if you leave. Do you want to continue?",
        [
          {
            text: "Stay",
            // onPress: () => Alert.alert("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "Leave",
            // onPress: () => {navigation.goBack()},
            onPress: () => handleClearAndLeave(),
            style: "ok",
          }
        ],
        
      )
    } else{
      navigation.goBack()
    }
   }

  useEffect(() => {
      if(!id){
        return
      }

      // setBasketRestaurant(null)
      fetchRestaurant()
      fetchDish()
      console.log("The navigation state is: ", index);
  }, [id])

  
  

  if(!restaurant){ 
    return(
      <View style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator  size={'large'} color='grey'/>
      </View>
    )
  }

  return (
    <SafeAreaView>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        {/* <View style={styles.DeliverTo}>
          <Text style={{color: '#419D47'}}>Deliver to</Text>
          <View style={{display: 'flex', justifyContent: 'space-between', paddingRight: 10, paddingLeft: 10, alignItems: 'center', flexDirection: 'row', width: '100%'}}>
            <Text></Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontSize: 22, }}>East Legon</Text>
              <MaterialIcons name="keyboard-arrow-down" size={34} color="black" />
            </View>
            <View>
              <AntDesign name="shoppingcart" size={24} color="black" />
            </View>
          </View>
        </View> */}

        <View>
              <Image
                  source={{uri: restaurant.image}}
                  style={{ width: "100%", height: 310, }}
                  // resizeMode="cover"
              />
              <Ionicons
                name='arrow-back-circle'
                size={50}
                color="white"
                style={styles.backIcon}
                onPress={handleLeaveDetailsScreen}
             />
        </View>

        <View style={styles.restaurantName}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>{restaurant.name}</Text>
            <View style={{display: 'flex', flexDirection: 'row', width: 150, justifyContent: 'space-between'}}>
              <Text>{restaurant.rating}</Text>
              <Ionicons name="star-sharp" size={18} color="#419D47" />
              <Text>{restaurant.rating}+ Ratings</Text>
            </View>
          </View>
          <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 30}}>$$ &#8226; Chinese &#8226; American &#8226; Deshi food</Text>
          {/* <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 30}}>{restaurant?.description}</Text> */}
          <View style={{height: 65, width: '50%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
          <MaterialIcons name="delivery-dining" size={24} color="grey" />
          <View>
            <Text style={styles.deliveryTime}>Delivery at GHS{restaurant.deliveryFee.toFixed(2)}</Text>
            <Text style={[styles.deliveryTime, {fontSize: 14}]}>{restaurant.minDeliveryTime}min-{restaurant.maxDeliveryTime}min</Text>
          </View>
          
          </View>
        </View>

        <View style={styles.foodOptions}>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/dollar.png')} style={{ width: 22, height: 22, }} />
            <Text style={styles.deliver}>Free{'\n'}<Text style={styles.deliver2}>Delivery</Text></Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('../../assets/time.png')} style={{ width: 22, height: 22, }} />
            <Text style={styles.deliver}>{restaurant.maxDeliveryTime}{'\n'}<Text style={styles.deliver2}>minutes</Text></Text>
          </View>
          <View style={{width: 130, height: 50, borderWidth: 1.3, borderColor: '#419D47', borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#419D47'}}>TAKE AWAY</Text>
          </View>
        </View>

      </View>

      <Text style={{padding: 15, fontSize: 23, fontWeight: 'bold'}}>Popular Orders</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.TopRestaurantsView}>
          <PopularOrders />
          <PopularOrders />
          <PopularOrders />
          <PopularOrders />
          <PopularOrders />
      </ScrollView>
      <View>
        <Text style={{padding: 15, fontSize: 23, fontWeight: 'bold'}}>Main Dishes</Text>
      </View>
      <View style={styles.ListItemsContainer}>
        {dishes?.map(dishes=>(<MainDishesListItem restaurantid={id} key={dishes.description} dish ={dishes} />))}
        {/* <FlatList 
                // horizontal
                // showsScrollIndicator={false}
                data = {dishes}
                renderItem = {({item})=> <MainDishesListItem restaurant={item} />}
                showsVerticalScrollIndicator = {false}
            /> */}
      </View>

    </ScrollView>
      {basket.length>0 && <View style={styles.floatingBasket}>
      <Pressable style={styles.button} onPress={()=>navigation.navigate("Cart Details", {df: restaurant.deliveryFee})}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>VIEW BASKET (GH¢{getBasketTotal(basket).toFixed(2)})</Text>
      </Pressable>
      </View>}
    </SafeAreaView>
  )
}

export default RestaurantDetailsScreen

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
    height: 570,
    width: '100%',
    // borderWidth: 1,
    marginTop: 45
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
    // borderWidth: 2,
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
    padding: 10,
    marginBottom: 50
  },
  backIcon: {
    position: 'absolute',
    top: 10,
    left: 10
  },
  floatingBasket: {
    display: 'flex',
    width: '100%',
    height: 60,
    // borderWidth: 1,
    position: 'absolute', //Here is the trick
    bottom: 0, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  button: {
    // backgroundColor: '#419D47',
    // borderWidth: 1,
    backgroundColor: '#419D47',
    width: 320,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 10,
    // marginLeft: 30
  },
  deliveryTime: {
    color: '#343F49', 
    opacity: 0.5, 
    fontSize: 16
  }

});