import React,{Component} from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,FlatList
} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text,Left,Right } from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';


export default class HomeScreen extends Component<React> {

    getBestProducts(){

        fetch('http://androidsupport.ir/market/getBestApplications.php')
            .then((response)=>response.json())
            .then((responseJson)=> {
                console.log(responseJson)
                this.setState({best :responseJson })
            })
            .catch((e)=> {

                console.log(e)

            })

    }

    constructor(props) {
        super(props);
        this.state= {

            best : null,
            images: [
                'http://androidsupport.ir/market/images/myirancell.png',
                'http://androidsupport.ir/market/images/myirancell.png'
            ],

        }
    }

    componentDidMount(){
        this.getBestProducts()
    }



    render(){
        return(
            <View>


                <SliderBox images={this.state.images} style={{height : 140}} />


                <Text style={{justifyContent:'flex-end',margin:8}}>
                    برترین محصولات
                </Text>

                <FlatList

                    horizontal={true}
                    data={this.state.best}
                    keyExtractor={(item,index)=>index.toString()}
                    renderItem={({item})=>
                    <View>

                        <Card>

                            <CardItem>

                                <Image

                                    style={{width : 144 , height : 144}}

                                    source={{uri : 'http://androidsupport.ir/market/images/'+item.icon}}

                                />





                            </CardItem>


                            <CardItem>

                                <Left/>


                                <Body>

                                <Text >{item.title}</Text>


                                </Body>

                                <Right/>


                            </CardItem>


                        </Card>




                    </View>

                    }


                    />





            </View>
        )
    }





}