import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Input } from '../atoms';
import { OperationButtons } from '../molecules/OperationButtons';

export const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(0);

  const operar = (tipo) => {
    const a = Number(num1);
    const b = Number(num2);

    if (tipo === 'sumar') setResultado(a + b);
    if (tipo === 'restar') setResultado(a - b);
    if (tipo === 'multiplicar') setResultado(a * b);
    if (tipo === 'dividir') setResultado(b !== 0 ? a / b : 'Error');
  };

  useEffect(() => {
    console.log("Resultado:", resultado);
  }, [resultado]);

  return (
    <View>
      <Input placeholder="Número 1" value={num1} onChange={setNum1} />
      <Input placeholder="Número 2" value={num2} onChange={setNum2} />

      <OperationButtons operar={operar} />

      <Text>Resultado: {resultado}</Text>
    </View>
  );
};