import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useStateValue } from '../components/BasketContex/StateProvider';

const CartItem = ({basketinfo}) => {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBusket = (itemID) => { 
        // remove from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: itemID,
            })
        };

  return (
    <View style={styles.container}>
      <View style={styles.foodList}>
        <View style={{width: 25, height: 25, borderWidth: 1, borderRadius: 6, borderColor: '#419D47', justifyContent: 'center', alignItems: 'center'}}><Text style={{color: '#419D47', fontWeight: 'bold'}}>{basketinfo.quantity}</Text></View>
        <View style={{width: 200}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>{basketinfo.name}</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}} numberOfLines={2}>{basketinfo.description}</Text>
        </View>
        <View style={{alignItems: 'center', width: 75}}>
          <Text style={{color: '#419D47', fontWeight: 'bold', fontSize: 16}}>GH¢{(basketinfo.price*basketinfo.quantity).toFixed(1)}</Text>
          <MaterialIcons onPress={()=>removeFromBusket(basketinfo.id)} name="delete" size={24} color="gray" />
        </View>
      </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // height: '100%',
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
      height: 100
    },
  });