import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const PaymentMethodScreen = () => {

    const addCreditCards = () => { 
    
    }

  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/paymentcard.png')}
            style={{ width: 150, height: 150, }}
        />
        <View style={styles.paymentCall}>
            <Text style={{fontSize: 24, fontWeight: '600', lineHeight: 50}}>Don’t have any card :)</Text>
            <Text style={{color: '343F49', opacity: 0.5, fontSize: 15, lineHeight: 22}}>It’s seems like you don’t add any credit or debit card. You may easily add card.</Text>
        </View>

        <Pressable style={styles.button} onPress={addCreditCards}>
            <Text style={{color: '#419D47', fontWeight: 'bold'}}>ADD CREDIT CARDS</Text>
        </Pressable>
    </View>
  )
}

export default PaymentMethodScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    paymentCall: {
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 1,
        width: 300
    },

    button: {
        // backgroundColor: '#419D47',
        borderWidth: 1,
        borderColor: '#419D47',
        width: 300,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 50
      },
  });