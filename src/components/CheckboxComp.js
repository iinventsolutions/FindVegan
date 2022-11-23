import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import Checkbox from 'expo-checkbox';

const CheckboxComp = ({dressing}) => {

const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.section}>
      <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#22A45D' : undefined}
      />
      <View style={{marginTop: 5,width: '90%', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.paragraph}>{dressing}</Text>
        <View style={{height: 25, width: 90, borderRadius: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#63D17F', marginTop: 5}}><Text style={{fontWeight: 'bold', color: '#fff'}}>GHS 36.00</Text></View>
      </View>
    </View>
  )
}

export default CheckboxComp

const styles = StyleSheet.create({
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        height: 60,
        borderBottomColor: '#E8E8E8',
        // borderWidth: 1
    },
    checkbox: {
        margin: 8,
    },
    paragraph: {
      fontSize: 17,
      color: '#6F6F6F'
    },
  });

