import {NativeBaseProvider, StatusBar}  from 'native-base';
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto';

import {THEME} from './src/styles/theme';

import {SingIn} from './src/screens/SingIn';
import {Loading} from './src/components/loading';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

  return (
    <NativeBaseProvider theme={THEME}>
       <StatusBar
       barStyle="light-content"
       backgroundColor="transparent"
       translucent
       />
         { fontsLoaded ? <SingIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
