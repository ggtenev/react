import React from 'react';
import {Text,View,StyleSheet,Image,Linking} from 'react-native';

import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = (props) => {
  return (
    <Card>
      <CardSection>
        <View style = {styles.thumbnailContainer}>
          <Image source = {{uri:props.album.thumbnail_image}} style = {styles.thumbnailStyle}/>
        </View>
        <View style = {styles.TitleArtist}>
          <Text style = {styles.headerStyle}>{props.album.title}</Text>
          <Text >{props.album.artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source = {{uri:props.album.image}} style = {styles.img}/>
      </CardSection>
      <CardSection>
        <Button onPress = {() => Linking.openURL(props.album.url)}/>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  title:{
    padding:5
  },
  TitleArtist:{
    flexDirection:'column',
    justifyContent:'space-around',
    marginLeft:5
  },
  headerStyle:{
    fontSize:18,
    fontWeight:'bold'
  },
  thumbnailStyle:{
    width:50,
    height:50
  },
  thumbnailContainer:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:10
  },
  img:{
    height:300,
    alignItems:'center',
    flex:1,
    width:null
  }
});

export default AlbumDetails;