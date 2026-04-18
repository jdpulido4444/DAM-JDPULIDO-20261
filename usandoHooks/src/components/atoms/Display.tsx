import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../themes/colors';
import { spaces } from '../../themes/space';

interface Props {
  valor: string;
}

const Display = ({ valor }: Props) => {
  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto} numberOfLines={1} adjustsFontSizeToFit>
        {valor}
      </Text>
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.pantalla,
    padding: spaces.grande,
    borderRadius: 12,
    marginBottom: spaces.mediano,
    alignItems: 'flex-end',
  },
  texto: {
    color: colors.textoClaro,
    fontSize: 48,
    fontWeight: '300',
  },
});

export default Display;