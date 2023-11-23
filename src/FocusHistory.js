import React from 'react';
import { View, Text, StyleSheet,FlatList} from 'react-native';
import {fontSizes, spacing} from './utils/sizes';
import { colors } from './utils/colors';

export const FocusHistory = ({history}) => {

  if(!history || !history.length)return <Text style = {styles.title}>we have not focused on anything yet!</Text>;

const renderItems = ({item}) => <Text style = {styles.item}>- {item}</Text>

  return(
    <View style= {styles.container}>
    <Text style={styles.title}>Things we Focused on:</Text>
    <FlatList data={history} renderItem = {renderItems} />
    </View>
  )


}

const styles = StyleSheet.create({
  container:{
    padding:spacing.md,
    flex:1,
  },
  item:{
    fontSize:fontSizes.md,
    color:colors.white,
    paddingTop:spacing.sm
  },
  title:{
    fontSize:fontSizes.md,
    fontWeight:'bold',
    color:colors.white,
  }
})