import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {Grid, Row, Col, Button} from 'native-base';
import Styles from '../../Styles';


export default function ForgetPasswordScreen({navigation}) {
    return (
        <ScrollView>
            <Grid style={{padding: 10}}>
                <Row>
                    <Col>
                        <Text>Forget Password Screen</Text>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
                    </Col>
                </Row>
                <Row>
                    <Col style={Styles.TestBorder}>
                        <Button full rounded transparent><Text style={{...Styles.buttonCommon, ...Styles.buttonTextWhite}} onPress={() => navigation.navigate('LoginScreen')}>Login</Text></Button>
                        
                    </Col>
                </Row>
                <Row>
                    <Col style={Styles.TestBorder}>
                        
                        <Button full rounded transparent><Text style={{...Styles.buttonCommon, ...Styles.buttonTextWhite}} onPress={() => navigation.navigate('RegisterScreen')}>Register</Text></Button>
                        
                    </Col>
                </Row>
                <Row>
                    <Col style={Styles.TestBorder}>
                        <Button full rounded transparent><Text style={{...Styles.buttonCommon, ...Styles.buttonTextWhite}} onPress={() => navigation.navigate('ForgetPasswordScreen')}>Forget Password</Text></Button>
                    </Col>
                </Row>
            </Grid>
        </ScrollView>
    )
}
