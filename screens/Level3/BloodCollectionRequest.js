import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Grid, Row, Col, Button, Input, Label} from 'native-base';
import {BloodGroups} from '../../Config';
import database from '@react-native-firebase/database';
import {ScrollView} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import Styles from '../../Styles';

export default function BloodCollectionRequest() {
  const [group, setGroup] = useState([]);
  const [filtered, setfiltered] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    database()
      .ref('/users')
      .on('child_added', (data) => {
        setData((old) => [...old, data.val()]);
      });
  }, []);

  const filterData = (e) => {
    //console.log(data);

    setGroup(e);
    const tempList = data.filter((item) => item.group === e);

    // console.log(tempList);
    setfiltered(tempList);
  };

  return (
    <ScrollView>
      <View style={Styles.BoxContainer}>
        <Label style={{...Styles.Label, ...Styles.txtRed}}>
          Select Required Blood Donor
        </Label>
        <View
          style={{
            borderWidth: 1,
            borderColor: '#ccc',
            borderRadius: 8,
            width: '100%',
            // marginBottom: 5,
            backgroundColor: 'red',
          }}></View>
        <Picker
          selectedValue={group}
          style={{
            width: '100%',
            color: 'rgb(172,0,26)',
          }}
          onValueChange={(itemValue, itemIndex) => filterData(itemValue)}>
          {BloodGroups.map((bg, ind) => (
            <Picker.Item label={bg.group} value={bg.group} key={ind} />
          ))}
        </Picker>
      </View>

      <View style={Styles.BoxContainer}>
        {filtered.map((v, i) => {
          return (
            <View key={i} style={Styles.donorCard}>
              {/* <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}> */}
              <View style={{flexDirection: 'row', margin: 5, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtBlack}}>
                  Name :
                </Text>
                <Text style={Styles.txtBlack}>{v.name}</Text>
              </View>
              <View style={{flexDirection: 'row', margin: 3, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtBlack}}>
                  E-mail :
                </Text>
                <Text style={Styles.txtBlack}>{v.email}</Text>
              </View>
              <View style={{flexDirection: 'row', margin: 3, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtBlack}}>
                  Blood Group :
                </Text>
                <Text style={Styles.txtBlack}>{v.group}</Text>
              </View>

              <View style={{flexDirection: 'row', margin: 3, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtBlack}}>
                  Contact#:
                </Text>
                <Text style={Styles.txtBlack}>{v.phone}</Text>
              </View>
              <View style={{flexDirection: 'row', margin: 3, paddingLeft: 30}}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtBlack}}>
                  Age:
                </Text>
                <Text style={Styles.txtBlack}>{v.age}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
