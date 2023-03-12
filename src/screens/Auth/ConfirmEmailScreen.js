import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/core';
import { useRoute } from '@react-navigation/core';
import { useForm } from 'react-hook-form'
import { Auth } from 'aws-amplify';

const ConfirmEmailScreen = () => {

  const route = useRoute();

  const {control, handleSubmit, watch} = useForm({defaultValues: {username: route?.params?.username}});

  const userName = watch('username')

  const navigation = useNavigation();

  const onConfirmPressed = async(data) => {
    // navigation.navigate('Home');
    try {
      await Auth.confirmSignUp(data.username, data.code);
      // console.log(res)
      navigation.navigate('SignIn');
    } catch (error) {
      Alert.alert("Oops", error.message)
    }
  };

  const onSignInPress = () => {
    navigation.navigate('SignIn');
  };

  const onResendPress = async() => {
    // console.warn('onResendPress');
    try {
      await Auth.resendSignUp(userName);
      Alert.alert('code resent successfully');
    } catch (err) {
        Alert.alert('error resending code: ', err.message);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>

        <CustomInput
          name='username'
          placeholder="Enter Username"
          control={control}
        />

        <CustomInput
          name='code'
          placeholder="Enter your confirmation code"
          control={control}
        />

        <CustomButton bgColor='#419D47' text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

        <CustomButton
          text="Resend code"
          onPress={onResendPress}
          type="SECONDARY"
          fgColor='#419D47'
        />

        <CustomButton
          text="Back to Sign in"
          onPress={onSignInPress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
});

export default ConfirmEmailScreen;
