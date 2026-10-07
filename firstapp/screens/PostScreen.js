import React from "react";
import {Text, View, StyleSheet, FlatList} from 'react-native';

class PostScreen extends React.Component{

    constructor(){
        super();
        this.state = {
            posts: []
        }
    }


async componentDidMount(){
    const data = await fetch("https://jsonplaceholder.typicode.com/posts")
    const jsonData = await data.json();
    this.state({posts: jsonData});
}

render(){
    const {posts} = this.state
    return(
        <Wiew>
            <Text>Posts: </Text>
            <FlatList 
            keyExtractor={posts => posts.id}
            data={posts} renderItem={({item})=>(
                <Views style={styles.postItem}>
                    <Text style={styles.postId}>ID: {item.id}</Text>
                    <Text style={styles.postTitle}>{item.title}</Text>
                </View>

            )}/>
        </Wiew>
    );
}



}