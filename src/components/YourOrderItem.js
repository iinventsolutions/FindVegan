import {View, Text, StyleSheet, Image, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const YourOrderItem = ({order}) => {

  const navigation = useNavigation();

  return (
    <Pressable onPress={()=>navigation.navigate('Order Details', {id: order?.id})} style={styles.container}>
      <View style={{width: '38%'}}>
          <Image
            source={{uri: order?.Restaurant?.image}}
            style={{ width: '100%', height: '100%', borderRadius: 7}}
          />
        </View>
      
      <View style={{width: '57%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', lineHeight: 40, width: '90%', lineHeight: 20}}>{order?.Restaurant?.name}</Text>
        <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 20}}>Shortbread, chocolate turtle cookies, and red velvet.</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 15}}>
          {/* <Text style={[styles.details]}>status: {order.status}</Text> */}
          <View style={{height: 25, width: 90, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63D17F'}}><Text style={{fontWeight: 'bold', color: '#fff'}}>{order.status}</Text></View>
          <Text style={[styles.details, styles.price]}>GHS {order?.subtotal}</Text>
        </View>
      </View>
    </Pressable>
 
  )
}

export default YourOrderItem

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      // justifyContent: 'center',
      margin: 12,
      // marginRight: 12,
      // borderWidth: 1,
      height: 120,
      width: '95%',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
  
    details: {
      fontSize: 15,
      color: '#343F49', 
      opacity: 0.8,
    },
    price: {
      color: '#22A45D',
      opacity: 1,
      fontWeight: 'bold'
    }
  });