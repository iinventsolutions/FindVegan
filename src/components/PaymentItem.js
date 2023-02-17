import React, { useRef } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Pressable, TouchableOpacity} from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useOrderContext } from '../contexts/OrderContex';
import { useRoute } from '@react-navigation/native';
// import  { Paystack , paystackProps}  from 'react-native-paystack-webview';


const PaymentItem = () => {

  // const paystackWebViewRef = useRef<paystackProps.PayStackRef>(null); 


    const navigation = useNavigation();
    const route = useRoute();
    const df = route.params?.df


    const checkOut = async () => { 
      
      navigation.navigate("Payment Confirmed", {df})
    }

  return (
    
      <Pressable onPress={checkOut} style={styles.foodList}>
        <View style={{width: 45, height: 45}}>
            <Image
                source={require('../../assets/momo.png')}
                style={{ width: "100%", height: '100%', borderRadius: 6}}
                // resizeMode="cover"
            />
        </View>
        <View style={{width: 200}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>Mobile Money</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>Default Payment</Text>
        </View>
        <View>
            <MaterialIcons name="keyboard-arrow-right" size={28} color="black" />
        </View>
      </Pressable>
    
  )
}

export default PaymentItem

const styles = StyleSheet.create({
  
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
      height: 180,
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