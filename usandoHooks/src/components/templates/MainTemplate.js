import React from 'react';
import { View } from 'react-native';

export const MainTemplate = ({ children }) => {
  return <View style={{ padding: 20 }}>{children}</View>;
};