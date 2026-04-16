import React from 'react';
import { Text } from 'react-native';
import { Calculator } from '../components/organisms/Calculator';
import { MainTemplate } from '../components/templates/MainTemplate';

const CalculateScreen = () => {
  return (
    <MainTemplate>
      <Text>Calculadora</Text>
      <Calculator />
    </MainTemplate>
  );
};

export default CalculateScreen;