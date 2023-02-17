import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, Image, ScrollView, Pressable, ActivityIndicator} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { useOrderContext } from '../contexts/OrderContex';
import { useStateValue } from '../components/BasketContex/StateProvider';
import { getBasketTotal } from '../components/BasketContex/reducer';

const CartScreen = ({navigation}) => {

  const route = useRoute();
  const [{ basket }] = useStateValue();
  const [order, setOrder] = useState()
  const { getOrder } = useOrderContext()

  // const food = route.params?.dishItem
  const id = route.params?.id;

  console.warn(id)

  useEffect(() => {
    getOrder(id).then(setOrder);
  }, [])

  if(!order){
    return <ActivityIndicator />
  }
  
  console.log("The order dishes are: ",order.dishes);

  return (
    <View style={styles.container}>
      <View>
        <Text>{order.status}</Text>
      </View>
      {order.dishes.reverse()?.map(basketinfo=>(<View key={basketinfo.id} style={styles.foodList}>
        <View style={{width: 25, height: 25, borderWidth: 1, borderRadius: 6, borderColor: '#419D47', justifyContent: 'center', alignItems: 'center'}}><Text style={{color: '#419D47', fontWeight: 'bold'}}>{basketinfo.quantity}</Text></View>
        <View><Text style={{fontSize: 19, fontWeight: 'bold', color: '#4F4F4F'}}>{basketinfo?.dish?.name}</Text></View>
        <View><Text style={{color: '#419D47', fontWeight: 'bold', fontSize: 16}}>GH¢{basketinfo?.dish?.price}</Text></View>
      </View>))}

      {/* <Pressable style={styles.button} onPress={checkOut}>
        <Text style={{color: 'white'}}>CHECKOUT</Text>
      </Pressable> */}
    </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 50
  },

  foodList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 1,
    // opacity: 0.5,
    borderColor: '#F3F3F3',
    height: 70
  },
  button: {
    backgroundColor: '#419D47',
    width: 200,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  }
});