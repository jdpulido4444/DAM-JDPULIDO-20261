import React from 'react';
import { View, StyleSheet } from 'react-native';

interface Props {
  hijos: React.ReactNode;
}

const ButtonRow = ({ hijos }: Props) => {
  return <View style={estilos.fila}>{hijos}</View>;
};

const estilos = StyleSheet.create({
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
});

export default ButtonRow;