import React from 'react';
import { Button } from 'react-native';

export const ButtonCalc = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} />;
};