import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default class Login extends React.Component{

    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }
    }

    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.headertext}>Barter</Text>

                <Text style={{color:'#528aae', fontWeight:'bold'}}>Welcome To Barter! To continue please Login</Text>
                
                
                <TextInput
                style={styles.inputBox}
                keyboardType= 'email-address'
                placeholder='E-mail'
                onChangeText={(text)=>{
                    this.state({
                        email:text
                    })
                }}/>

                <TextInput
                style={styles.inputBox}
                secureTextEntry={true}
                placeholder='Password'
                onChangeText={(text)=>{
                    this.state({
                        password:text
                    })
                }}/>


                <TouchableOpacity 
                style={styles.button}>
                    <Text>LOG-IN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.button}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#bcd2e8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headertext: {
        fontSize: 50,
        color:'#001c57',
        paddingBottom: 30
    },
    inputBox: {
        borderColor:'#001b3a',
        borderBottomWidth:2,
        height:20,
        width:200,
        marginTop:30,
    },
    button: {
        width:225, 
        height:35, 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:25, 
        backgroundColor:"#528aae", 
        shadowColor: "#000", 
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.30, 
        shadowRadius: 10.32, 
        elevation: 16, 
        marginTop: 35
    }
  });
  