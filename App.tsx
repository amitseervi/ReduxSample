/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StatusBar} from 'react-native';
//import {counterContainer} from './app/containers/CounterContainer';
import CounterComponent from './app/components/CounterComponent';
import {store} from './app/store/Store';

const App = () => {
  return (
    <Provider store={store}>
      <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <CounterComponent />
        </SafeAreaView>
      </>
    </Provider>
  );
};
export default App;
