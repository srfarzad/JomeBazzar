import React,{Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,Button,
} from 'react-native';
import call from 'react-native-phone-call'
import LottieView from 'lottie-react-native';

const args = {
    number: '9093900003', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
}
export default class SettingScreen extends Component<React> {
    render(){
        return(
            <View style={{flex : 1 , justifyContent:'center' , alignItems:'center'}}>
                <Text>
                    SettingScreen
                </Text>

                <Button
                title="Call to Rouhani"
                onPress={()=> {
                    call(args).catch(()=> {

                    })

                }}
                />

                <LottieView source={require('../assets/crab')}
                            autoPlay loop
                />


            </View>
        )
    }
}