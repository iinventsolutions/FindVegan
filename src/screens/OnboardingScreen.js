import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import Onboarding from 'react-native-onboarding-swiper';
import {useNavigation} from '@react-navigation/native';

const OnboardingScreen = () => {

  const navigation = useNavigation();

  const [launchedBefore, setLaunchedBefore] = useState(null)

  // useEffect(() => {
  //   AsyncStorage.getItem('onboardingShown').then((value)=>{
  //     if(value===null){
  //       AsyncStorage.setItem('onboardingShown', 'true');
  //     }
  //   })
  //   // AsyncStorage.setItem('onboardingShown', 'true');
  // }, []);

    useEffect(() => {
      AsyncStorage.setItem('onboardingShown', 'true');
    }, []);
  

  return (
    <Onboarding
      onDone={()=>{navigation.replace('HomeList')}}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/onboard1.png')} />,
            title: 'Welcome',
            subtitle: 'Order from the best local restaurants with easy, on-demand delivery.',
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../assets/onboard2.png')} />,
            title: 'Quick delivery',
            subtitle: 'Free delivery for new customers via Apple Pay and others payment methods.',
          },
        ]}
    />
  );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
  header: {
    fontSize: 25,
    marginTop: 10,
    color: '#010F07',
    fontFamily: 'SF-Display',
    
  },

});