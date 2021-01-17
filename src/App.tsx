import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NativeModules } from 'react-native';
const { CiontekPrinterModule } = NativeModules; 


export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => { 
    // const CiontekCs10C = CiontekPrinterModule
    CiontekPrinterModule.testingModule('HAI', (tes: String) => console.log('>', tes)); 
    CiontekPrinterModule.checkPrinterStatus((status: Number) => {
      console.log('checkPrinterStatus', status)
      setResult(status)
    }); 
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { CiontekPrinterModule.testPrint() } }>
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
