import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
export const Button = props => {
  const {title, image} = props;
  const {reset, imageStyle} = styles;
  return (
    <TouchableOpacity style={reset}>
        <Image 
        source= {image}
        style= {imageStyle}
        />
        <Text style={{color: '#000'}}> {title} </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  reset: {
    width: 120,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    borderRadius: 5
  },
  imageStyle: {
    width: 30,
    height: 25
  }
});
