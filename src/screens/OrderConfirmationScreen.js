import React, { useCallback, useMemo, useRef, useState } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, Pressable, ActivityIndicator} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import LoadingItems from '../components/LoadingItems';


const OrderConfirmationScreen = ({navigation}) => {

  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true)

  // variables
  const snapPoints = useMemo(() => ["75%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

    const keepBrowsing = () => { 
      navigation.navigate("Restaurants")
    }

  return (
    <GestureHandlerRootView style={[styles.container, {backgroundColor: isOpen? 'grey': '#fff'}]}>
        <Image
            source={require('../../assets/done.png')}
            style={{ width: 60, height: 60, }}
        />
        <View style={styles.paymentCall}>
            <Text style={{fontSize: 24, fontWeight: '600', lineHeight: 30, textAlign: 'center', marginTop: 20}}>You Place the Order Successfully</Text>
            <Text style={{color: '343F49', opacity: 0.5, fontSize: 15, lineHeight: 22, textAlign: 'center', marginTop: 20}}>You placed the order successfully. You will get your food within 25 minutes. Thanks for using our services. Enjoy your food :)</Text>
        </View>

      <View style={{flexDirection: 'row', height: 60, marginTop: 40, width: 270, justifyContent: 'space-between', alignItems: 'center'}}>
        <Pressable style={[styles.button, {backgroundColor: '#E9E9E9'}]} onPress={keepBrowsing}>
            <Text style={{color: '#333', fontWeight: 'bold'}}>Keep Browsing</Text>
        </Pressable>

        <Pressable style={[styles.button, {backgroundColor: '#419D47'}]} onPress={()=>navigation.navigate("Placing Order")}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Check Status</Text>
        </Pressable>
      </View>
      {isOpen && <BottomSheet
          innderRef={bottomSheetRef}
          index={0}
          enablePanDownToClose={true}
          snapPoints={snapPoints}
          onChange={handleSheetChanges}
          onClose={()=>setIsOpen(false)}
        >
          <BottomSheetView style={styles.contentContainer}>
            <View style={{width: '90%',flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>Placing Order...</Text>
              <ActivityIndicator size={28} color='#419D47'/>
            </View>
            <View>
              <LoadingItems title={'East Legon'} sub={'Meet at door'} />
              <LoadingItems title={'Standard delivery: 10-20 min'} sub={''}/>
              <LoadingItems title={''} sub={'My order,Derek'}/>
            </View>
          </BottomSheetView>
        </BottomSheet>}
    </GestureHandlerRootView>
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

    contentContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 20
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
        width: 130,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        // margin: 50
      },
  });