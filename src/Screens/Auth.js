import React from 'react';
import {View, Text, Button, Platform} from 'react-native';

const Auth = ({navigation}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'lightblue',
      }}>
      <Text>Auth</Text>
      <Button title="Press" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Auth;
