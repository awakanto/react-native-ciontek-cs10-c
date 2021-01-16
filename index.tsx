import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';
AppRegistry.registerComponent(appName, () => App);

// import { NativeModules } from 'react-native';
// const { CiontekPrinterModule } = NativeModules; 
// interface CiontekPrinterInterface {
//   testingModule(name: string, cb: Function): void;
//   checkPrinterStatus(status: Function): void;
//   testPrint(): void;
// }
// export default CiontekPrinterModule as CiontekPrinterInterface;
 
