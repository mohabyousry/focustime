import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from './utils/colors';
import {spacing} from './utils/sizes';
import {RoundedButton} from './components/RoundedButton';

export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style = {styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on ?"
        />
          <View style = {styles.button}>
            <RoundedButton title = '+' size = {50} onPress = {() =>addSubject(subject)}/>
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  textInput: {
    flex: 1 ,
    margainRight: spacing.sm,
  },
  button:{
    justifyContent:'center',
    paddingLeft:5,
  },
  inputContainer: {
    padding: spacing.l,
    justifyContent: 'top',
    flexDirection:'row',
  },
});
