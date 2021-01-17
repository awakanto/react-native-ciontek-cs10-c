import * as React from 'react';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NativeModules } from 'react-native';
const { CiontekPrinterModule } = NativeModules; 


export default function App() {
  // const [cdw, setCdw] = React.useState(3);
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => { 
    setResult(-1)
    // let si = setInterval(function(){ 
    //   setCdw(cdw - 1)
    //   if (cdw <= 0) {
    //     clearInterval(si)
    //   }
    // }, 1100);

    // const CiontekCs10C = CiontekPrinterModule
    // CiontekPrinterModule.testingModule('HAI', (tes: String) => console.log('>', tes)); 
    
  }, []);

  return (
     <View style={styles.container}>
       { 
        (result !== 0) ? 
        <TouchableOpacity onPress={() => { 
          CiontekPrinterModule.checkPrinterStatus((status: Number) => {
            console.log('checkPrinterStatus', status)
            setResult(status)
            alert(status)
          }); 
        }}>
          <Text>Tap disini untuk cek status printer</Text>
        </TouchableOpacity> :
        <TouchableOpacity onPress={() => { CiontekPrinterModule.testPrint() } }>
          <Text style={{ color: 'blue' }}>Tap disini untuk test print</Text>
        </TouchableOpacity> 
       }
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
