import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const CartScreen = () => {

  const checkOut = () => { 
    
   }

  return (
    <View style={styles.container}>
      <View style={styles.foodList}>
        <View style={{width: 25, height: 25, borderWidth: 1, borderRadius: 6, borderColor: '#419D47', justifyContent: 'center', alignItems: 'center'}}><Text style={{color: '#419D47', fontWeight: 'bold'}}>1</Text></View>
        <View><Text style={{fontSize: 19, fontWeight: 'bold', color: '#4F4F4F'}}>Cookie Sandwich</Text></View>
        <View><Text style={{color: '#419D47', fontWeight: 'bold', fontSize: 16}}>USD7.4</Text></View>
      </View>

      <Pressable style={styles.button} onPress={checkOut}>
        <Text style={{color: 'white'}}>CHECKOUT</Text>
      </Pressable>
    </View>
  )
}

export default CartScreen

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