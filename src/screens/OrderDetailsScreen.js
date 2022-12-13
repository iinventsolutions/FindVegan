import {View, Text, StyleSheet, Image, ScrollView, Pressable, FlatList} from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { container } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { getBasketTotal } from '../components/BasketContex/reducer';
import { useStateValue } from '../components/BasketContex/StateProvider';
import CartItem from '../components/CartItem';
import { useRoute } from '@react-navigation/native';
import { useOrderContext } from '../contexts/OrderContex';

const OrderDetailsScreen = () => {

  const { createOrder } = useOrderContext()

  const navigation = useNavigation();
  const [{basket}, dispatch] = useStateValue();
  const route = useRoute();
  const df = route.params?.df //delivery fee

  const checkOut = () => { 
    navigation.navigate("Payment Options")
   }

  return (
    // <ScrollView>
    <View style={styles.container}>
      <FlatList 
          // horizontal
          // showsHorizontalScrollIndicator={false}
          data = {basket}
          renderItem = {({item})=> <CartItem basketinfo={item} />}
          showsVerticalScrollIndicator = {false}
        />

      <View style={styles.subTotal}>
        <View>
          <Text style={styles.subInfo}>Subtotal</Text>
          <Text style={styles.subInfo}>Delivery</Text>
          <Text style={styles.subInfo}>Total (inl. VAT)</Text>
          <Text style={styles.addMore}>Add more items</Text>
        </View>
        <View>
          <Text style={styles.subInfo}>GH¢{getBasketTotal(basket).toFixed(2)>0?((getBasketTotal(basket)).toFixed(2)):0}</Text>
          <Text style={styles.subInfo}>GHS{df.toFixed(2)}</Text>
          <Text style={styles.subInfo}>GH¢{getBasketTotal(basket).toFixed(2)>0?((getBasketTotal(basket)+df).toFixed(2)):0}</Text>
          <MaterialIcons style={styles.arrow} name="keyboard-arrow-right" size={24} color="black" />
        </View>
      </View>

      <Pressable style={styles.button} onPress={createOrder}>
        <Text style={{color: 'white', fontWeight: 'bold'}}>CREATE ORDER</Text>
      </Pressable>
    </View>
    // </ScrollView>
  )
}

export default OrderDetailsScreen

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
    height: 100
  },
  button: {
    backgroundColor: '#419D47',
    width: 300,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 50
  },
  subTotal: {
    // borderWidth: 1,
    width: '90%',
    height: 130,
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