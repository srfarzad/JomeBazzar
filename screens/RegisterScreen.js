import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert
} from 'react-native';


import firebase from 'react-native-firebase'

export default class RegisterScreen extends Component<React> {

    constructor(props) {
        super(props);
        this.state = {
            email   : '',
            password: '',
        }
    }

    onClickListener = (viewId) => {
        //Alert.alert("Alert", "Button pressed "+viewId);

        firebase.auth().createUserWithEmailAndPassword("sr.farzad@gmail.com","Abc12#3@21")
            .then((user)=> {

                Alert.alert("Alert",user.toString());


            }).catch((err)=> {
            Alert.alert("Alert", err.toString());

        })

        ///login

        firebase.auth().signInWithEmailAndPassword("sr.farzad@gmail.com","Abc12#3@21")
            .then((user)=> {

                Alert.alert("Alert",user.toString());


            }).catch((err)=> {
            Alert.alert("Alert", err.toString());

        })


    };

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={{uri: 'https://png.icons8.com/google/color/120'}}/>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/user/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Name"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>


                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={{uri: 'https://png.icons8.com/speech-bubble/ultraviolet/50'}}/>
                    <TextInput style={[ styles.messageInput]}
                               placeholder="Message"
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.sendButton]} onPress={() => this.onClickListener('login')}>
                    <Text style={styles.buttonText}>Send</Text>
                </TouchableHighlight>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    logo:{
        width:120,
        height:120,
        justifyContent: 'center',
        marginBottom:20,
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:100,
        borderRadius:30,
    },
    sendButton: {
        backgroundColor: "#FF4500",
    },
    buttonText: {
        color: 'white',
    }
});