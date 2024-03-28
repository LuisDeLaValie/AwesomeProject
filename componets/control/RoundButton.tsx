import React, {PropsWithRef} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

type props = PropsWithRef<{
  texto: string;
  nombre?: string;
  onPress?: (event: GestureResponderEvent) => void | undefined;
}>;

export default function RoundButton(prop: props): React.JSX.Element {
  return (
    <TouchableOpacity style={styles.botton} onPress={prop.onPress}>
      <Text style={styles.textBotton}> {prop.texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botton: {
    backgroundColor: '#18c426',
    borderRadius: 100,
    padding: 10,
    textAlign: 'center',
    // alignContent: 'center',
  },
  textBotton: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});
