import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DragableView} from './app/Elements/SharedElements';

const App = () => {
  return (
    <View style={styles.container}>
      <DragableView>
        <View style={styles.box} />
      </DragableView>
      <DragableView>
        <View style={[styles.box, {backgroundColor: 'red'}]} />
      </DragableView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#00f',
    borderRadius: 10,
  },
});
