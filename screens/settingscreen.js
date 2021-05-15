import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import Lottie from '../components/lottie';
import db from '../config'

export default class Settings extends React.Component{
    constructor(){
        super();
        this.state={
            emailID:firebase.auth().currentUser.email,
            fullname:'',
            contact:'',
            address:'',
            docID:''
        }
    }

    getUserDetails=()=>{
        db.collection('Users').where('Email','==', this.state.emailID).get()
        .then((response)=>{
            response.forEach(doc=>{
                var data=doc.data();
                this.setState({
                    fullname:data.FullName,
                    contact:data.Contact,
                    address:data.Address,
                    docId:doc.id
                })
            })
        })
    }

    updateUserDetails=()=>{
        db.collection('Users').doc(this.state.docID).update({
            FullName:this.state.fullname,
            Contact:this.state.contact,
            address:this.state.address
        })

        Alert.alert('Profile Update Succesfully')
    }

    componentDidMount(){
        this.getUserDetails();
    }

    render(){
        return(
            <View>
                <TextInput
                value={this.state.fullname}
                onChangeText={(text)=>{
                    this.setState({
                        fullname:text
                    })
                }} />

                <TextInput
                value={this.state.contact}
                onChangeText={(text)=>{
                    this.setState({
                        contact:text
                    })
                }} />

                <TextInput
                value={this.state.address}
                onChangeText={(text)=>{
                    this.setState({
                        address:text
                    })
                }} />

                <TouchableOpacity
                onPress={()=>{
                    this.updateUserDetails();
                }}>
                    <Text>Update</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({ container : { flex:1, alignItems: 'center', justifyContent: 'center' }, formContainer:{ flex:1, width:'100%', alignItems: 'center' }, formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, buttonText:{ fontSize:25, fontWeight:"bold", color:"#fff" } })