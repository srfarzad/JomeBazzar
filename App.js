/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
// react-native run-android

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import CategoryScreen from "./screens/CategoryScreen";
import SettingScreen from "./screens/SettingScreen";
import NativeBaseScreen from "./screens/NativeBaseScreen";

import SQLite from "react-native-sqlite-2";

const db = SQLite.openDatabase("test.db", "1.0", "", 1);

 class LoginScreen extends Component<Props> {


     constructor(props) {
         super(props)

         db.transaction(function (ext) {

             ext.executeSql(
                 "CREATE TABLE IF NOT EXISTS tbl_users(user_id INTEGER PRIMARY KEY NOT NULL, username VARCHAR(30))",
                 []
             );

             ext.executeSql("INSERT INTO tbl_users (username) VALUES (:username)", ["nora"]);
             ext.executeSql("INSERT INTO tbl_users (username) VALUES (:username)", ["nora1"]);
             ext.executeSql("INSERT INTO tbl_users (username) VALUES (:username)", ["nora2"]);
             ext.executeSql("INSERT INTO tbl_users (username) VALUES (:username)", ["nora3"]);

         })

     }




    render() {

        return (

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'/>
                </View>

                <TouchableOpacity style={styles.restoreButtonContainer}>
                    <Text>Forgot?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={()=>{

                this.props.navigation.navigate('dashboard');

                }
                }>

                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}
                onPress={()=> {

                    this.props.navigation.navigate('register');

                }}>
                    <Text>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]} onPress={()=>{

                    this.props.navigation.navigate('NativeBaseScreen');

                }}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Continue with facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]} onPress={()=> {

                    this.props.navigation.navigate('register');

                }}>
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )

    }

}

const homeTabs = createBottomTabNavigator({

    HomeScreen , CategoryScreen ,SettingScreen
});

const mainStack = createStackNavigator({

    login : {
        screen : LoginScreen
    },
  /*  home : {
        screen :
    },*/
    register : {
        screen : RegisterScreen
    },
    NativeBaseScreen : {
        screen : NativeBaseScreen,
        navigationOptions: {
            header: null,
        }
    }
    ,
    dashboard : homeTabs
   /* category : {
        screen :
    },
    setting : {
        screen :
    }*/

});

const App = createAppContainer(mainStack);
 export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0E0E6',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    icon:{
        width:30,
        height:30,
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: '#3498db',
    },
    fabookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    loginText: {
        color: 'white',
    },
    restoreButtonContainer:{
        width:250,
        marginBottom:15,
        alignItems: 'flex-end'
    },
    socialButtonContent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon:{
        color: "#FFFFFF",
        marginRight:5
    }
});
