import { View, Text, StyleSheet, Image } from 'react-native'
import { AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import React from 'react'

const LoadingItems = ({title, sub}) => {
  return (
    <View style={styles.foodList}>
        <View style={{width: 45, height: 45}}>
            <Ionicons name="checkmark-sharp" size={28} color="green" />
        </View>
        <View style={{width: 200}}>
          <Text style={{fontSize: 19, fontWeight: '500', color: '#4F4F4F'}}>{title}</Text>
          <Text style={{color: '343F49', opacity: 0.5, fontSize: 15}}>{sub}</Text>
        </View>
        <View>
            {/* <MaterialIcons name="keyboard-arrow-right" size={28} color="black" /> */}
        </View>
    </View>
  )
}

export default LoadingItems

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