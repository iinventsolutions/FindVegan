import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
  Alert
} from 'react-native';
import Logo from '../../../assets/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import { useForm, Controller} from 'react-hook-form'
import { Auth } from 'aws-amplify';


const SignInScreen = () => {

  const {control, handleSubmit, formState: {errors}} = useForm();

  // console.log(errors)
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false)

  const onSignInPressed = async(data) => {
    // console.log("useForm data: ",data.email, data.password)
    if(loading){
      return
    }

    setLoading(true)
    try {
      const res = await Auth.signIn(data.email, data.password)
      console.log(res)
    } catch (error) {
      Alert.alert("Oops", error.message)
    }
    setLoading(false)
    // navigation.navigate('HomeList');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPress = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView style={{backgroundColor: '#fff'}} showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        {/* <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        /> */}
        <View style={{marginBottom: 20}}>
          <Text style={styles.mainHead}>Welcome</Text>
          <Text style={styles.subHead}>Enter your Phone number or Email address for sign in. Enjoy your food :)</Text>
        </View>

        <CustomInput
          name='email'
          placeholder="Email Address"
          control={control}
          rules={{
            required: 'Email address is required',
            pattern: {
              value: emailRegex,
              message: 'Email is invalid'
            }
          }}
        />
        <CustomInput
          name='password'
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 3,
              message: 'Password should be more than three characters'
            }
          }}
        />



        <CustomButton
          text="Forgot password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <CustomButton bgColor='#419D47' text={loading? "Loading...":"Sign In"} onPress={handleSubmit(onSignInPressed)} />

        <CustomButton
          text="Don't have an account? Create new account"
          onPress={onSignUpPress}
          type="TERTIARY"
        />

        <SocialSignInButtons />




      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // height: '100%',
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff'
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },

  mainHead: {
    fontSize: 30,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 30
  },
  
  subHead: {
    lineHeight: 20,
    color: '#868686'
  }
});

export default SignInScreen;
