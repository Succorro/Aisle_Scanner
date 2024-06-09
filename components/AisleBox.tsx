import {Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const AisleBox = ({ aisle, onClickAisle, selectedAisle}) => {
    const backgroundColor = aisle.id === selectedAisle + 1 ? '#6e3b6e' : '#f9c2ff';

    
    return (
      <TouchableOpacity style={[styles.aisleBox, {backgroundColor: backgroundColor}]} onPress={()=> onClickAisle(aisle.id - 1)}>
        {/* Render aisle details or icon */}
        <Text>{aisle.aisleNumber}</Text>
      </TouchableOpacity>
)};


const styles = StyleSheet.create({
    aisleBox: {
      width: '30%', // Adjust the width based on the number of columns
      aspectRatio: 3, // Make the aisle box a square
      margin: 5,
    },
  });
export default AisleBox