import React, {useState, useEffect} from 'react';
import {View, Text, Button, ImageBackground} from 'react-native';
import database from '@react-native-firebase/database';
import {ScrollView} from 'react-native-gesture-handler';
import Styles from '../../Styles';

export default function MyProfile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    database()
      .ref('/users')
      .on('child_added', (data) => {
        setData((old) => [...old, data.val()]);
      });
  }, []);

  return (
    <ScrollView>
      <View style={Styles.BoxContainer}>
        <Text style={Styles.ltxt}>All Donor List</Text>
        {data.map((v, i) => {
          return (
            <View key={i} style={{...Styles.Card, ...Styles.logo}}>
              <View style={{flexDirection: 'row', margin: 5, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Name :
                </Text>
                <Text style={Styles.txtRed}>{v.name}</Text>
              </View>

              <View style={{flexDirection: 'row', margin: 5, paddingLeft: 20}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Blood Group:
                </Text>
                <Text style={Styles.txtRed}>{v.group}</Text>
              </View>

              <View style={{flexDirection: 'row', margin: 5, paddingLeft: 20}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Email:
                </Text>
                <Text style={Styles.txtRed}>{v.email}</Text>
              </View>

              <View style={{flexDirection: 'row', margin: 5, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Contact:
                </Text>
                <Text style={Styles.txtRed}>{v.phone}</Text>
              </View>
              <View style={{flexDirection: 'row', margin: 5, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Age:
                </Text>
                <Text style={Styles.txtRed}>{v.age}</Text>
              </View>
              <View style={{flexDirection: 'row', margin: 5, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Address:
                </Text>
                <Text style={Styles.txtRed}>{v.address}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
