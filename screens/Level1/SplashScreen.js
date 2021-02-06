import React from 'react';
import {View, ImageBackground, Image, Text} from 'react-native';
import Styles from '../../Styles';
import {
  Container,
  Header,
  Content,
  Button,
  Form,
  Item,
  Input,
  Label,
} from 'native-base';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    //console.log("called");
    navigation.replace('Auth');
  }, 2000);

  return (
    <View style={Styles.logo}>
      <Image
        source={require('../assets/bl_bank.png')}
        style={{
          width: 300,
          height: 300,
          resizeMode: 'contain',
          marginTop: 40,
        }}></Image>
      {/* <ImageBackground
        source={require('../assets/blood.png')}
        style={{width: 100, height: 100, resizeMode: 'contain', marginTop: 40}}
      />
    } */}
    </View>
  );
}
