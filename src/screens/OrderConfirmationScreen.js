import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const OrderConfirmationScreen = ({navigation}) => {

    const keepBrowsing = () => { 
      navigation.navigate("Restaurants")
    }

  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/done.png')}
            style={{ width: 60, height: 60, }}
        />
        <View style={styles.paymentCall}>
            <Text style={{fontSize: 24, fontWeight: '600', lineHeight: 30, textAlign: 'center', marginTop: 20}}>You Place the Order Successfully</Text>
            <Text style={{color: '343F49', opacity: 0.5, fontSize: 15, lineHeight: 22, textAlign: 'center', marginTop: 20}}>You placed the order successfully. You will get your food within 25 minutes. Thanks for using our services. Enjoy your food :)</Text>
        </View>

        <Pressable style={styles.button} onPress={keepBrowsing}>
            <Text style={{color: '#419D47', fontWeight: 'bold'}}>KEEP BROWSING</Text>
        </Pressable>
    </View>
  )
}

export default OrderConfirmationScreen;

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