import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import YourOrderItem from '../components/YourOrderItem';

const OrdersScreen = () => {
  return (
    <ScrollView>
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={{width: '95%', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', opacity: 0.6}}>UPCOMING ORDERS</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>CLEAR ALL</Text>
      </View>
        <YourOrderItem />
        <YourOrderItem />
        <YourOrderItem />
        <YourOrderItem />
        <YourOrderItem />
        <YourOrderItem />
        <YourOrderItem />

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff', 
    height: '100%', 
    width: '100%',
    alignItems: 'center',
    // borderWidth: 1,
    // flexDirection: 'column'
  }
});

export default OrdersScreen