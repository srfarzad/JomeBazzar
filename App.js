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
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar, Button, TextInput, TouchableOpacity,FlatList,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

export default class App extends Component<React> {

    constructor(props){
        super(props);
        this.state= {
            counter : 0,
        }
    }

    increaseValue () {
        this.setState({counter : this.state.counter + 1})
    }


    render() {

        return (

            <View style={{flex : 1 , justifyContent:'center'}}>

                <TouchableOpacity onPress={() => {
                    alert('welcome to class')
                }}>
                    <Text> Welcome to react native </Text>
                </TouchableOpacity>


                <Button title="Click" onPress={() => {
                    alert('welcome to class')
                }}/>

                <TextInput
                    placeholder="Enter your name"
                />


                <View style={{flex : 1 , flexDirection:'row', justifyContent:'center'}}>


                    <TouchableOpacity style={{marginRight:10}} onPress={()=> {

                       this.increaseValue()

                    }}>
                        <Text>+</Text>
                    </TouchableOpacity>

                    <Text style={{marginRight:10}}>{this.state.counter}</Text>

                    <TouchableOpacity onPress={()=>{
                        this.setState({counter : this.state.counter - 1})
                    }}>
                        <Text>-</Text>
                    </TouchableOpacity>






                </View>


                <View style={{flex :1}}>
                    <FlatList

                        data={[
                            {key : 'android'},
                            {key : 'iOS'},
                            {key : 'Windows'},
                            {key : 'Linux'},
                        ]}

                        renderItem={({item})=> <Text> {item.key} </Text> }
                    />
                </View>

                <ScrollView style={{flex : 1 }}>




                    <Text>
                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).


                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).


                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).


                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).


                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).

                        The ScrollView is a generic scrolling container that can contain multiple components and views. The scrollable items need not be homogeneous, and you can scroll both vertically and horizontally (by setting the horizontal property).


                    </Text>



                </ScrollView>



            </View>

        )

    }

}

const styles = StyleSheet.create({
    myText: {
        marginRight: 10,
        fontSize: 32,
        color: 'red',
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

//export default App;
