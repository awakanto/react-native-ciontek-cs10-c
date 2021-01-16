import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import CiontekCs10C from 'react-native-ciontek-cs10-c';


export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => { 
    CiontekCs10C.testingModule('HAI', (tes: String) => console.log('>', tes)); 
    CiontekCs10C.checkPrinterStatus((status: Number) => {
      console.log('checkPrinterStatus', status)
      setResult(status)
    }); 
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { CiontekCs10C.testPrint() } }>
        <Text>Result: {result}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
