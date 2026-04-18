import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Display, ButtonCalc } from '../atoms';
import { ButtonRow } from '../molecules';
import { colors } from '../../themes/colors';

const Calculator = () => {
  const [pantalla, setPantalla] = useState('0');
  const [primerValor, setPrimerValor] = useState('');
  const [operador, setOperador] = useState('');
  const [esperandoSiguiente, setEsperandoSiguiente] = useState(false);

  useEffect(() => {
    if (esperandoSiguiente) {
      setPantalla('0');
    }
  }, [esperandoSiguiente]);

  const manejarNumero = (numero: string) => {
    if (esperandoSiguiente) {
      setPantalla(numero);
      setEsperandoSiguiente(false);
    } else {
      setPantalla(pantalla === '0' ? numero : pantalla + numero);
    }
  };

  const manejarOperador = (op: string) => {
    setPrimerValor(pantalla);
    setOperador(op);
    setEsperandoSiguiente(true);
  };

  const manejarIgual = () => {
    if (!operador || !primerValor) return;

    const a = parseFloat(primerValor);
    const b = parseFloat(pantalla);
    let resultado = 0;

    switch (operador) {
      case '+': resultado = a + b; break;
      case '-': resultado = a - b; break;
      case '×': resultado = a * b; break;
      case '÷': resultado = b !== 0 ? a / b : NaN; break;
    }

    setPantalla(isNaN(resultado) ? 'Error: división por cero' : String(resultado));
    setPrimerValor('');
    setOperador('');
    setEsperandoSiguiente(false);
  };

  const manejarLimpiar = () => {
    setPantalla('0');
    setPrimerValor('');
    setOperador('');
    setEsperandoSiguiente(false);
  };

  return (
    <View style={estilos.contenedor}>
      
      <Display valor={pantalla} />

      <ButtonRow hijos={<>
        <ButtonCalc etiqueta="AC" tipo="especial" alPresionar={manejarLimpiar} />
        <ButtonCalc etiqueta="÷"  tipo="operador" alPresionar={() => manejarOperador('÷')} />
      </>} />

      <ButtonRow hijos={<>
        <ButtonCalc etiqueta="7" alPresionar={() => manejarNumero('7')} />
        <ButtonCalc etiqueta="8" alPresionar={() => manejarNumero('8')} />
        <ButtonCalc etiqueta="9" alPresionar={() => manejarNumero('9')} />
        <ButtonCalc etiqueta="×" tipo="operador" alPresionar={() => manejarOperador('×')} />
      </>} />

      <ButtonRow hijos={<>
        <ButtonCalc etiqueta="4" alPresionar={() => manejarNumero('4')} />
        <ButtonCalc etiqueta="5" alPresionar={() => manejarNumero('5')} />
        <ButtonCalc etiqueta="6" alPresionar={() => manejarNumero('6')} />
        <ButtonCalc etiqueta="-" tipo="operador" alPresionar={() => manejarOperador('-')} />
      </>} />

      <ButtonRow hijos={<>
        <ButtonCalc etiqueta="1" alPresionar={() => manejarNumero('1')} />
        <ButtonCalc etiqueta="2" alPresionar={() => manejarNumero('2')} />
        <ButtonCalc etiqueta="3" alPresionar={() => manejarNumero('3')} />
        <ButtonCalc etiqueta="+" tipo="operador" alPresionar={() => manejarOperador('+')} />
      </>} />

      <ButtonRow hijos={<>
        <ButtonCalc etiqueta="0" alPresionar={() => manejarNumero('0')} ancho />
        <ButtonCalc etiqueta="=" tipo="igual" alPresionar={manejarIgual} />
      </>} />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: colors.fondo,
    padding: 16,
    justifyContent: 'flex-end',
  },
});

export default Calculator;