import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors } from '../../themes/colors';

interface Props {
  etiqueta: string;
  alPresionar: () => void;
  tipo?: 'numero' | 'operador' | 'especial' | 'igual';
  ancho?: boolean;
}

const ButtonCalc = ({ etiqueta, alPresionar, tipo = 'numero', ancho = false }: Props) => {
  const colorFondo = {
    numero: colors.botonNumero,
    operador: colors.botonOperador,
    especial: colors.botonEspecial,
    igual: colors.botonIgual,
  }[tipo];

  return (
    <TouchableOpacity
      style={[estilos.boton, { backgroundColor: colorFondo }, ancho && estilos.botonAncho]}
      onPress={alPresionar}
    >
      <Text style={estilos.texto}>{etiqueta}</Text>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  boton: {
    flex: 1,
    margin: 6,
    borderRadius: 50,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonAncho: {
    flex: 2,
    aspectRatio: undefined,
    borderRadius: 50,
    paddingHorizontal: 24,
    alignItems: 'flex-start',
  },
  texto: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '500',
  },
});

export default ButtonCalc;