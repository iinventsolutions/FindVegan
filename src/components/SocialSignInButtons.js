import React from 'react';
import {View, Text} from 'react-native';
import CustomButton from './CustomButton';

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn('onSignInFacebook');
  };

  const onSignInGoogle = () => {
    console.warn('onSignInGoogle');
  };

  const onSignInApple = () => {
    console.warn('onSignInApple');
  };

  return (
    <>
      <CustomButton
        text="CONNECT WITH FACEBOOK"
        onPress={onSignInFacebook}
        bgColor="#395998"
        fgColor="#fff"
      />
      <CustomButton
        text="CONNECT WITH GOOGLE"
        onPress={onSignInGoogle}
        bgColor="#4285F4"
        fgColor="#fff"
      />
      {/* <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      /> */}
    </>
  );
};

export default SocialSignInButtons;
