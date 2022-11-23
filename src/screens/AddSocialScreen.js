import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const AddSocialScreen = ({navigation}) => {

    const keepBrowsing = () => { 
      navigation.navigate("Restaurants")
    }

  return (
    <View style={styles.container}>
        {/* <Image
            source={require('../../assets/refer.png')}
            style={{ width: 150, height: 150, marginRight: 40 }}
        /> */}
        <View style={styles.paymentCall}>
            <Text style={{fontSize: 24, fontWeight: '600', lineHeight: 30, textAlign: 'center', marginTop: 20}}>Add social accounts</Text>
            <Text style={{color: '343F49', opacity: 0.5, fontSize: 15, lineHeight: 22, textAlign: 'center', marginTop: 20}}>Add your social accounts for more security. You will go directly to their site.</Text>
        </View>

        <View style={{width: '100%', justifyContent: 'space-between', alignItems: 'center', height: 120, marginTop: 100}}>
            <Pressable style={[styles.button, {backgroundColor: '#395998', borderColor: '#fff'}]} onPress={keepBrowsing}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>CONNECT WITH FACEBOOK</Text>
            </Pressable>
            <Pressable style={[styles.button, {backgroundColor: '#4285F4'}]} onPress={keepBrowsing}>
                <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 13}}>CONNECT WITH GOOGLE</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default AddSocialScreen;

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
        // borderWidth: 1,
        // borderColor: '#419D47',
        width: 300,
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 50
      },
  });