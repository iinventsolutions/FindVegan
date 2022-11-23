import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import PaymentItem from '../components/PaymentItem';

const CardListScreen = () => {


  return (
    <View style={styles.container}>
      <PaymentItem />
    </View>
  )
}

export default CardListScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 50
  }
});