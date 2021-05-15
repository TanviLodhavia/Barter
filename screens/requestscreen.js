import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/header';

export default class Request extends React.Component{
    constructor(){
        super();
        this.state={
            bookname:'',
            author:'',
            reason:'',
            userid:firebase.auth().currentUser.email
        }
    }

    addRequest = () => {
        db.collection('requested_books').add({
            user_id:this.state.userid,
            book_name:this.state.bookname,
            author_name:this.state.author,
            reason:this.state.reason,
            request_id:Math.round().toString(36).substring(7)
        })
    }

    render(){
        return(
            <View>
                {/*<MyHeader title='Request Book'/>*/}
                <KeyboardAvoidingView>

                    <TextInput
                    style={styles.formTextInput}
                    placeholder='Book Name'
                    onChangeText={(text)=>{
                        this.setState({
                            bookname:text
                        })
                    }} 
                    />


                    <TextInput
                    style={styles.formTextInput}
                    placeholder='Author'
                    onChangeText={(text)=>{
                        this.setState({
                            author:text
                        })
                    }}
                    />


                    <TextInput
                    style={[styles.formTextInput, {height:300}]}
                    multiline = {true}
                    placeholder='Reason To Request'
                    onChangeText={(text)=>{
                        this.setState({
                            reason:text
                        })
                    }}
                    />

                    <TouchableOpacity 
                    style={styles.button}
                    onPress={()=>{this.addRequest()}}>
                        <Text>Request</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    keyBoardStyle : { 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center' 
    }, formTextInput:{ width:"75%", height:35, alignSelf:'center', borderColor:'#ffab91', borderRadius:10, borderWidth:1, marginTop:20, padding:10, }, button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )