import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TextInput} from 'react-native'
import { EvilIcons } from '@expo/vector-icons';

import TopCategories from '../components/TopCategories'

const SearchScreen = () => {

  const [textInputValue, setTextInputValue] = useState('');
  const [searchIconState, setSearchIconState] = useState(false)

  return (
    <View style={styles.container}>
        <View style={{width: '80%', borderRadius: 10, backgroundColor: '#FBFBFB', alignItems: 'center', flexDirection: 'row', borderColor: '#F0F0F0', borderWidth: 1, justifyContent: 'center'}}>
          {searchIconState === false ? <EvilIcons name="search" size={24} color="gray" />: <Text></Text>}
          <TextInput
            style={{ 
            height: 50,
            width: '80%',
            border: 'none',
            borderColor: 'gray', 
            // borderWidth: 1,
            backgroundColor: '#FBFBFB',
            placeholderTextColor: 'gray',
          }}
            onChangeText={text => setTextInputValue(text)}
            value={textInputValue}
            placeholder="Search findvegan"
            onFocus={()=>{setSearchIconState(true)}}
          />
        </View>
        <View style={{width: '100%', marginTop: 20}}>
          <Text style={{marginLeft: 15, fontSize: 18, fontWeight: 'bold'}}>Top Categories</Text>
        </View>
        <View style={styles.searchContainer}>
            <TopCategories />
            <TopCategories />
            <TopCategories />
            <TopCategories />
        </View>
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 60,
    display: 'flex',
    flexDirection: 'column'
  },

  searchContainer: {
    // borderWidth: 1,
    width: '100%',
    // marginTop: 0,
    height: 'auto',
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: 25,
    paddingRight: 25,
  }
});