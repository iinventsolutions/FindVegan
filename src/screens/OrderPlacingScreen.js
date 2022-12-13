import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, Image } from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import 'react-native-gesture-handler';



const OrderPlacingScreen = () => {

  // renders
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{fontSize: 25, fontWeight: 'bold'}}>Placing Order...</Text>
        <Text>Arriving at 10:15PM</Text>
      </View>
      <View style={{width: '100%', marginTop: 100, }}>
      <Image source={require('../../assets/waiting.png')} style={{}} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff'
    // backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default OrderPlacingScreen;