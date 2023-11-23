import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from './src/utils/colors';
import React, { useState } from 'react';
import { Focus } from './src/Focus';
import {Timer} from './src/Timer'
import{FocusHistory} from './src/FocusHistory'
// import Constants from 'expo-constants';

export default function App() {
  const [currentSubject, setCurrentSubject] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <>
        <Focus addSubject = {setCurrentSubject} />
        <FocusHistory history = {history}/>
        </>
      ) : (
        <Timer
          focusSubject = {currentSubject}
          onTimerEnd={(subject) => {
            setHistory([...history, subject])
            }}
          clearSubject = {() => {setCurrentSubject(null)}}
        />
        
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
});
