import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import axios from 'axios';

import AlbumDetails from './AlbumDetails';


class AlbumList extends Component  {
  state = {
    albums:[]
  }
  componentWillMount(){
   axios.get('http://rallycoding.herokuapp.com/api/music_albums/')
    .then(res => this.setState({albums:res.data}))
  }
  render(){
    const albums = this.state.albums.map(album => <AlbumDetails key = {album.title} album = {album} />)
    return (
      <ScrollView style = {{marginBottom:10}}>
        {albums}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  album:{
    padding:20,
    // backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
    
  },
  tex:{
    fontSize:20
  }
});

export default AlbumList;