import React, {useState} from 'react';
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import {Grid, Row, Col, Button, Input, Label} from 'native-base';
import {Picker} from '@react-native-picker/picker';
// import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
//import DateTimePicker from '@react-native-community/datetimepicker';

import Styles from '../../Styles';
import {BloodGroups} from '../../Config';

export default function RegisterScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [group, setGroup] = useState('');

  const [registered, setRegistered] = useState(false);

  const SaveRecord = () => {
    const obj = {
      name,
      email,
      password,
      address,
      phone,
      age,
      group,
    };
    // ***************************

    // auth()
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(() => {
    //     setRegistered(true);
    //   })
    //   .catch((error) => {
    //     if (error.code === 'auth/email-already-in-use') {
    //       console.log('That email address is already in use!');
    //     }

    //     if (error.code === 'auth/invalid-email') {
    //       console.log('That email address is invalid!');
    //     }

    //     console.error(error);
    //   });

    database()
      .ref('users')
      .push(obj)
      .then(() => {
        console.log('User data saved ');
        setRegistered(true);
      })
      .catch((err) => console.log(err));

    //*****************************

    //console.log(obj);
  };

  return (
    <ScrollView>
      <Grid style={{padding: 10}}>
        <Row>
          <Col>
            <View style={Styles.logo}>
              <Image
                source={require('../assets/blood.png')}
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: 'contain',
                  marginTop: 40,
                }}
              />
            </View>
          </Col>
        </Row>

        <Row>
          <Col>
            <Text style={Styles.ltxt}>Register</Text>
          </Col>
        </Row>

        <Row style={registered ? Styles.Hide : Styles.Show}>
          <Col>
            <View style={Styles.BoxContainer}>
              <Label style={Styles.Label}>Full Name</Label>
              <Input
                style={Styles.InputBox}
                value={name}
                onChangeText={(e) => setName(e)}
              />

              <Label style={Styles.Label}>E-mail</Label>
              <Input
                style={Styles.InputBox}
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
              <Label style={Styles.Label}>Password</Label>
              <Input
                secureTextEntry={true}
                style={Styles.InputBox}
                value={password}
                onChangeText={(e) => setPassword(e)}
              />
              <Label style={Styles.Label}>Phone no</Label>
              <Input
                style={Styles.InputBox}
                value={phone}
                onChangeText={(e) => setPhone(e)}
              />
              <Label style={Styles.Label}>Address</Label>
              <Input
                style={Styles.InputBox}
                value={address}
                onChangeText={(e) => setAddress(e)}
              />
              <Label style={Styles.Label}>Age</Label>
              <Input
                style={Styles.InputBox}
                value={age}
                onChangeText={(e) => setAge(e)}
              />

              <Label style={Styles.Label}>Blood Group</Label>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 8,
                  width: '100%',
                  marginBottom: 20,
                }}>
                <Picker
                  selectedValue={group}
                  style={{
                    width: '100%',
                  }}
                  onValueChange={(itemValue, itemIndex) => setGroup(itemValue)}>
                  {BloodGroups.map((bg, ind) => (
                    <Picker.Item label={bg.group} value={bg.group} key={ind} />
                  ))}
                </Picker>
              </View>
              <TouchableOpacity onPress={SaveRecord}>
                <Text
                  style={{...Styles.buttonCommon, ...Styles.buttonTextWhite}}>
                  Register
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View style={Styles.singleLine}>
              <Text style={{...Styles.bottomLtxt, ...Styles.blacktxt}}>
                New User ?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Register Here
                </Text>
              </TouchableOpacity>
            </View> */}
          </Col>
        </Row>

        <Row style={registered ? Styles.Show : Styles.Hide}>
          <Col>
            <Text>You are successfully registered.</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Text style={{...Styles.buttonCommon, ...Styles.buttonTextWhite}}>
                Click Here To Login
              </Text>
            </TouchableOpacity>
          </Col>
        </Row>
        <Row>
          <Col>
            <View style={Styles.singleLine}>
              <Text style={{...Styles.bottomLtxt, ...Styles.blacktxt}}>
                Already Registered ?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <Text style={{...Styles.bottomLtxt, ...Styles.txtRed}}>
                  Login Here
                </Text>
              </TouchableOpacity>
            </View>
          </Col>
        </Row>
      </Grid>
    </ScrollView>
  );
}
