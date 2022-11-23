import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const YourOrderItem = () => {
  return (
 
    <View style={styles.container}>
      <View style={{width: '38%'}}>
          <Image
            source={require('../../assets/details.png')}
            style={{ width: '100%', height: '100%', borderRadius: 7}}
          />
        </View>
      
      <View style={{width: '57%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold', lineHeight: 40}}>Fresh Green Salad</Text>
        <Text style={{color: '#343F49', opacity: 0.5, lineHeight: 20}}>Shortbread, chocolate turtle cookies, and red velvet.</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%', marginTop: 15}}>
          <Text style={[styles.details]}>$$ &#x2022; Chinese</Text>
          <Text style={[styles.details, styles.price]}>GHS 7.4</Text>
        </View>
      </View>
    </View>

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