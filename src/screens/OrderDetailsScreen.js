import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { container } from 'aws-amplify';

const OrderDetailsScreen = () => {

  const checkOut = () => { 
    
   }

  return (
    <View style={styles.container}>
      <View style={styles.foodList}>
        <View style={{width: 25, height: 25, borderWidth: 1, borderRadius: 6, borderColor: '#419D47', justifyContent: 'center', alignItems: 'center'}}><Text style={{color: '#419D47', fontWeight: 'bold'}}>1</Text></View>
        <View style={{width: 200}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>Cookie Sandwich</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>Shortbread, chocolate turtle cookies, and red velvet.</Text>
        </View>
        <View><Text style={{color: '#419D47', fontWeight: 'bold', fontSize: 16}}>USD7.4</Text></View>
      </View>

      <View style={styles.subTotal}>
        <View>
          <Text style={styles.subInfo}>Subtotal</Text>
          <Text style={styles.subInfo}>Delivery</Text>
          <Text style={styles.subInfo}>Total (inl. VAT)</Text>
          <Text style={styles.addMore}>Add more items</Text>
        </View>
        <View>
          <Text style={styles.subInfo}>$29.00</Text>
          <Text style={styles.subInfo}>$0.00</Text>
          <Text style={styles.subInfo}>$29.00</Text>
          <MaterialIcons style={styles.arrow} name="keyboard-arrow-right" size={24} color="black" />
        </View>
      </View>

      <Pressable style={styles.button} onPress={checkOut}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>CONFIRM PURCHASE</Text>
      </Pressable>
    </View>
  )
}

export default OrderDetailsScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
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
  button: {
    backgroundColor: '#419D47',
    width: 200,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  },
  subTotal: {
    // borderWidth: 1,
    width: '90%',
    height: 180,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  subInfo: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 35
  },

  addMore: {
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 45,
    color: '#419D47'
  },

  arrow: {
    fontWeight: '500',
    lineHeight: 45,
  }
});