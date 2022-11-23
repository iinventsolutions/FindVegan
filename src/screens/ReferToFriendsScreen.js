import {View, Text, StyleSheet, Image, ScrollView, Pressable} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const ReferToFriendsScreen = ({navigation}) => {

    const keepBrowsing = () => { 
      navigation.navigate("Restaurants")
    }

  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/refer.png')}
            style={{ width: 150, height: 150, marginRight: 40 }}
        />
        <View style={styles.paymentCall}>
            <Text style={{fontSize: 24, fontWeight: '600', lineHeight: 30, textAlign: 'center', marginTop: 20}}>Refer a Friend, Get $10</Text>
            <Text style={{color: '343F49', opacity: 0.5, fontSize: 15, lineHeight: 22, textAlign: 'center', marginTop: 20}}>Get $10 in credits when someone sign up using your refer link</Text>
        </View>

        <View style={{width: '100%', justifyContent: 'space-between', alignItems: 'center', height: 120, marginTop: 100}}>
            <Pressable style={[styles.button, {backgroundColor: '#419D47'}]} onPress={keepBrowsing}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>EMAIL</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={keepBrowsing}>
                <Text style={{color: '#419D47', fontWeight: 'bold'}}>OTHERS</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default ReferToFriendsScreen;

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
        // marginTop: 50
      },
  });