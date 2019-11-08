import React,{Component} from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';


export default class NativeBaseScreen extends Component<React> {



    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon name='menu'/>
                        </Button>
                    </Left>

                    <Body><Title>
                        Home
                    </Title>
                    </Body>

                    <Right />

                </Header>



                <Content>

                </Content>

                <Footer>

                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>

                </Footer>

            </Container>
        )
    }
}