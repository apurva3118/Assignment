/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {View, Text,StyleSheet} from 'react-native';
import React from 'react';

const List = () => {
  return (
    <View style={{flex: 1,flexDirection:'row'}}>
     <View style={styles.circle}/>
     <Text style={{fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
          marginTop:30,
          }}>Starbucks</Text>
          <Text style={{fontSize: 20,
          color: 'black',
          marginTop:60,
          marginLeft:-110,
          }}>Rating</Text>
          <Text style={{fontSize: 15,
          color: 'black',
          marginTop:110,
          marginLeft:-57,
          borderBottomWidth:1,
          }}>Miles</Text>
          <Text style={{fontSize: 15,
          color: 'black',
          marginTop:150,
          marginLeft:-190,
          }}>4th Floor,The Ruby,29,Senapati Bapat,Dadar West</Text>
           <Text style={{fontSize: 15,
          color: 'black',
          marginTop:170,
          marginLeft:-335,
          }}>4th Floor,The Ruby,29,Senapati Bapat,Dadar West</Text>
          <Text style={{
            borderBottomColor:'black',
            borderBottomWidth:1}} />
    </View>

  );
};
const styles = StyleSheet.create({
 circle:{
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'black',
    margin:35,
    flexDirection:'row',
 },
});
export default List;
