import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Car from '../Components/Car';
import {Colors} from '../Constants/Colors';

interface Props {}

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Car />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundColor,
  },
  scroll: {
    borderWidth: 1,
    borderStyle: 'solid',
    width: '95%',
    marginVertical: 5,
  },
});
