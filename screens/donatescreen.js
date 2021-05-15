import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView, FlatList } from 'react-native';
import {ListItem} from 'react-native-elements'
import firebase from 'firebase';
import db from '../config';
import MyHeader from '../components/header';

export default class Donate extends React.Component{
    constructor(){
        super();
        this.state={
            requestedBooksList:[]
        }
    }

    getRequestedBooksList=()=>{ 
        this.requestRef=db.collection("requested_books")
        .onSnapshot((snapshot)=>{ 
            var requestedBooksList=snapshot.docs.map(document=>document.data()) 
            this.setState({ 
                requestedBooksList:requestedBooksList 
            }) 
        }) 
    }

    componentDidMount(){
        this.getRequestedBooksList();
    }

    keyExtractor=(item,index)=>index.toString(); 

    renderItem=({item,i})=>{ 
        return( 
            <ListItem 
            key={i} bottomDivider> 
                <ListItem.Content> 
                    <ListItem.Title>{item.book_name}</ListItem.Title> 
                    <ListItem.Subtitle>{item.reason}</ListItem.Subtitle> 
                    <TouchableOpacity style={styles.button} > 
                    <Text style={{color:"white"}}>View</Text> </TouchableOpacity> 
                </ListItem.Content> 
            </ListItem> 
        ) 
    }

    render(){
        return(
            <View>
                {/*<MyHeader title='Donate Book'/>*/}
                <View>
                    {this.state.requestedBooksList===0 ? (
                        <View>
                            <Text>List of requested books</Text>
                        </View>
                    ):(
                        <FlatList 
                        data={this.state.requestedBooksList}
                        renderItem={this.renderItem}
                        keyExtractor={this.keyExtractor}/>
                    )}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({ 
    keyBoardStyle : { 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center' 
    }, 
    formTextInput:{ 
        width:"75%", 
        height:35, 
        alignSelf:'center', 
        borderColor:'#ffab91', 
        borderRadius:10, 
        borderWidth:1, 
        marginTop:20, padding:10, }, button:{ width:"75%", height:50, justifyContent:'center', alignItems:'center', borderRadius:10, backgroundColor:"#ff5722", shadowColor: "#000", shadowOffset: { width: 0, height: 8, }, shadowOpacity: 0.44, shadowRadius: 10.32, elevation: 16, marginTop:20 }, } )