import React from 'react';
import { View } from 'react-native';
import { ButtonCalc } from '../atoms';

export const OperationButtons = ({ operar }) => {
  return (
    <View>
      <ButtonCalc title="Sumar" onPress={() => operar('sumar')} />
      <ButtonCalc title="Restar" onPress={() => operar('restar')} />
      <ButtonCalc title="Multiplicar" onPress={() => operar('multiplicar')} />
      <ButtonCalc title="Dividir" onPress={() => operar('dividir')} />
    </View>
  );
};