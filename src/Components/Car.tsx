import {BlurView} from '@react-native-community/blur';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

interface Props {}

const Car = (props: Props) => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={require('../Assets/Images/gt350-front.png')}
        width={50}
        height={50}
        style={styles.imgBg}>
        <BlurView blurType="light" style={styles.blur}>
          <Text style={styles.text}>{`Make & Model`}</Text>
          <Text style={styles.text}>Horsepower</Text>
          <Text style={styles.text}>Torque</Text>
          <Text style={styles.text}>0-60</Text>
        </BlurView>
      </ImageBackground>
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({
  item: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'white',
    height: 250,
  },
  text: {
    color: 'white',
  },
  imgBg: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  blur: {
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignSelf: 'center',
  },
});
