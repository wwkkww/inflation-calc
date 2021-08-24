/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Crashes from 'appcenter-crashes'
import Analytics from 'appcenter-analytics'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



class App extends React.Component {
  constructor() {
    super()
    this.checkPreviousSession()
  }

  async checkPreviousSession() {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if(didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      console.log('report', report)
      alert("Sorry about the crash")
    }
  }
  
  render() {
    return (
      <SafeAreaView style={styles.sectionContainer}>
        <Button title="Crash"
          onPress={() => Crashes.generateTestCrash() }
        />
        <Button title="Calculate inflation"
          onPress={() => Analytics.trackEvent("Calculate inflation", { internet: "WiFi", gps: false }) }
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
