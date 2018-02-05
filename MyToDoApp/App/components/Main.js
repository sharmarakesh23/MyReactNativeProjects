import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import Note from './Note';

export default class Main extends Component {

    constructor(props){
        super(props);
        this.state = {
            toDoList: [],
            toDoText: '',
        };
    }
    render() {
        let noteList = this.state.toDoList.map((val, key)=>{
            return <Note key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteNote(key)}/>
        });
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>- NOTER -</Text>
                </View>
                <ScrollView style={styles.scrollContainer}>
                    {noteList}
                </ScrollView>

                <View style={styles.footer}>
                    <TextInput 
                        style={styles.textInput}
                        placeholder='>note'
                        onChangeText={(toDoText)=> this.setState({toDoText})}
                        value={this.state.toDoText}
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </View>
                <TouchableOpacity onPress={ this.addNote.bind(this) } style={styles.addButton}>
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }

    addNote(){
        if(this.state.toDoText){
            var d = new Date();
            this.state.toDoList.push({
                'date':d.getFullYear()+"/"+(d.getMonth()+1) + "/"+ d.getDate(),
                'note': this.state.toDoText
            });
            this.setState({ toDoList: this.state.toDoList });
            this.setState({toDoText:''});
        }
        else
        {
            alert('Please enter valid to do text.')
        }
    }

    deleteNote(key){
        this.state.toDoList.splice(key, 1);
        this.setState({toDoList: this.state.toDoList});
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#E91E63',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 10,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 18,
        padding: 26
    },
    scrollContainer: {
        flex: 1,
        marginBottom: 100
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10
    },
    textInput: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth:2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: '#E91E63',
        width: 70,
        height: 70,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: '#fff',
        fontSize: 24
    }
});