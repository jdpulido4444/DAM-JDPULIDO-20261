import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Calculator } from '../organisms';
import { colors } from '../../themes/colors';


const CalculatorTemplate = () => {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <Calculator />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colors.fondo,
  },
});

export default CalculatorTemplate;