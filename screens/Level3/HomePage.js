import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import {Grid, Row, Col, Button, Body, Input, Label} from 'native-base';
import Styles from '../../Styles';

export default function HomePage() {
  return (
    <ScrollView>
      <View style={Styles.homeCard}>
        <Text
          style={{
            color: 'rgb(172,0,26)',
            fontSize: 25,
            fontWeight: 'bold',
          }}>
          Blood Groups
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            justifyContent: 'center',
            alignItems: 'center',
            // marginTop: 10,
            padding: 16,
          }}>
          There are four major blood groups determined by the presence or
          absence of two antigens – A and B – on the surface of red blood cells.
          In addition to the A and B antigens, there is a protein called the Rh
          factor, which can be either present (+) or absent (–), creating the 8
          most common blood types (A+, A-, B+, B-, O+, O-, AB+, AB-).
        </Text>
        <Image
          source={require('../assets/groups.jpg')}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'contain',
            // marginTop: 5,
          }}
        />
      </View>

      <View style={Styles.homeCard}>
        <Text
          style={{color: 'rgb(172,0,26)', fontSize: 25, fontWeight: 'bold'}}>
          Blood Types
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            // justifyContent: 'center',
            // alignItems: 'center',
            // marginTop: 10,
            padding: 9,
          }}>
          Although all blood is made of the same basic elements, not all blood
          is alike. Infect, there are eight different common blood types, which
          are determined by the presence or absence of certain
          antigens–substances that can trigger an immune response if they are
          foreign to the body. There are four major blood groups determined by
          the presence or absence of two antigens–A and B–on the surface of red
          blood cells:
        </Text>

        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'center',
          }}>
          <Text style={Styles.homeTxt1}>Group A</Text>
          <Text style={Styles.homeTxt2}>
            -has only the A antigen on red cells (and B antibody in the plasma)
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'center',
          }}>
          <Text style={Styles.homeTxt1}>Group B</Text>
          <Text style={Styles.homeTxt2}>
            – has only the B antigen on red cells(and A antibody in the plasma)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'center',
          }}>
          <Text style={Styles.homeTxt1}>Group AB</Text>
          <Text style={Styles.homeTxt2}>
            – has both A and B antigens on red cells(but neither A nor B
            antibody in the plasma)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            justifyContent: 'center',
          }}>
          <Text style={Styles.homeTxt1}> Group O</Text>
          <Text style={Styles.homeTxt2}>
            – has neither A nor B antigens on red cells (but both A and B
            antibody are in the plasma)
          </Text>
        </View>
        <Text></Text>
        <Image
          source={require('../assets/types.jpg')}
          style={{
            width: '100%',
            height: 200,
            resizeMode: 'contain',
            marginTop: 5,
          }}
        />
      </View>
    </ScrollView>
  );
}
